import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBullseye, FaEye, FaAward, FaHeart } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

// Custom Counter Component for Scroll-based Count-up
const Counter = ({ value, label, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const numericPart = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numericPart)) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = numericPart;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Quadratic ease-out progress
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.round(end * easedProgress);

      setCount(currentVal);

      if (frame === totalFrames) {
        clearInterval(timer);
        setCount(numericPart);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const suffix = value.replace(/\d/g, "");

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md shadow-sm hover:shadow-md hover:border-golden/20 transition-all duration-300"
    >
      <h4 className="font-display text-3xl sm:text-4xl font-bold text-dark-gray">
        <span>{count}</span>
        <span className="text-golden ml-0.5">{suffix}</span>
      </h4>
      <p className="text-xs sm:text-sm text-soft-gray font-sans mt-2 tracking-wide font-medium">
        {label}
      </p>
    </div>
  );
};

const About = () => {
  const cardContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <AnimatedSection id="about" className="section-padding bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative elements for luxury theme */}
      <div className="absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-golden/5 blur-[90px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-deep-orange/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Main Section Header */}
        <SectionHeading
          subtitle="About Pavaki"
          title="Healing the Mind, Body & Soul"
          description="A sacred sanctuary of holistic rejuvenation, guiding you toward inner harmony, positive energy, and spiritual awakening."
        />

        {/* Founder & Center Presentation Grid */}
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-16 mt-12">
          
          {/* LEFT SIDE: Large Premium Image Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Background Golden Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-golden/10 blur-[80px] -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[400px] rounded-[32px] p-3 bg-white/30 border border-white/50 backdrop-blur-md shadow-xl overflow-visible"
            >
              {/* Floating Animation Wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-inner border border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                  alt="Pavaki Therapy Sanctuary"
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>

              {/* Small Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 rounded-2xl border border-white/30 bg-white/70 p-5 shadow-lg backdrop-blur-md max-w-[150px] text-center"
              >
                <p className="font-display text-2xl font-bold text-dark-gray">10+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-golden mt-1">
                  Years of Healing
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Professional Bio & Founder Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <p className="text-base sm:text-lg leading-relaxed text-soft-gray font-sans">
              Pavaki Therapy Clinic & Training Center is a leading destination for holistic wellness,
              dedicated to aligning and restoring your physical, emotional, and spiritual well-being.
              We combine ancient healing traditions with modern therapeutic techniques to guide you toward
              inner peace, positive energy, and spiritual awakening.
            </p>
            <p className="text-base leading-relaxed text-soft-gray font-sans">
              Our peaceful haven is designed to foster deep healing, spiritual empowerment, and self-realization,
              giving you the wisdom and techniques to transform your life from within.
            </p>

            {/* Premium Founder Profile Card */}
            <div className="rounded-2xl border border-white/60 bg-white/40 p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-white/60 hover:shadow-md mt-8">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-golden to-deep-orange shadow-md">
                  <FaAward className="text-2xl text-white" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-dark-gray tracking-tight">
                    Healing Master Nimmati Satheesh
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {["MCA", "MBA", "Ph.D."].map((deg) => (
                      <span
                        key={deg}
                        className="rounded-full bg-golden/10 border border-golden/20 px-3 py-0.5 text-xs font-bold text-golden tracking-wider uppercase"
                      >
                        {deg}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-soft-gray font-sans">
                    A distinguished healing master and spiritual trainer who bridges academic excellence
                    with decades of deep spiritual experience. Nimmati Satheesh is dedicated to providing
                    transformative Reiki, meditation guidance, and holistic energy therapies to empower you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, and Values Cards Section */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-8 md:grid-cols-3"
        >
          {/* Card 1: Our Mission */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(212, 175, 55, 0.15)" }}
            className="flex flex-col items-start p-8 rounded-3xl bg-white/50 border border-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-golden/30 hover:bg-white/80"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden/10 text-golden transition-all duration-300">
              <FaBullseye className="text-2xl" />
            </div>
            <h3 className="font-display text-xl font-bold text-dark-gray tracking-tight">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-soft-gray font-sans">
              To provide compassionate, authentic holistic healing and spiritual training that empowers
              individuals to discover their inner strength, achieve balance, and live harmonious, purposeful lives.
            </p>
          </motion.div>

          {/* Card 2: Our Vision */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(212, 175, 55, 0.15)" }}
            className="flex flex-col items-start p-8 rounded-3xl bg-white/50 border border-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-golden/30 hover:bg-white/80"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-deep-orange/10 text-deep-orange transition-all duration-300">
              <FaEye className="text-2xl" />
            </div>
            <h3 className="font-display text-xl font-bold text-dark-gray tracking-tight">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-soft-gray font-sans">
              To be a global beacon of holistic wellness and spiritual enlightenment, inspiring a world
              where healing, wisdom, and personal transformation are accessible to all.
            </p>
          </motion.div>

          {/* Card 3: Our Values */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(212, 175, 55, 0.15)" }}
            className="flex flex-col items-start p-8 rounded-3xl bg-white/50 border border-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-golden/30 hover:bg-white/80"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-golden/10 text-golden transition-all duration-300">
              <FaHeart className="text-2xl text-golden" />
            </div>
            <h3 className="font-display text-xl font-bold text-dark-gray tracking-tight">Our Values</h3>
            <ul className="mt-4 text-sm leading-relaxed text-soft-gray font-sans space-y-2">
              {[
                "Compassion & Empathy",
                "Authenticity & Truthfulness",
                "Professional, Ethical Guidance",
                "Trust & Confidentiality",
                "Positive Transformation",
              ].map((val) => (
                <li key={val} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-golden" />
                  {val}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Statistics Section */}
        <div className="mt-20 pt-12 border-t border-golden/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter value="500+" label="Happy Clients" />
            <Counter value="10+" label="Healing Therapies" />
            <Counter value="100+" label="Students Trained" />
            <Counter value="100%" label="Personalized Guidance" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
