import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import buddhaImg from "../assets/Buddha.jpg";

// Reusable Constants
const STATS = [
  { id: "stat-clients", value: "500+", label: "Happy Clients", icon: "⭐" },
  { id: "stat-services", value: "10+", label: "Healing Services", icon: "🧘" },
  { id: "stat-programs", value: "Certified", label: "Training Programs", icon: "🎓" },
];

const Hero = () => {
  // Smooth scroll helper
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      aria-label="Welcome to Pavaki Therapy Clinic & Training Center"
      className="relative flex min-h-screen lg:h-screen lg:min-h-0 items-center justify-center overflow-hidden bg-[#120b06]"
    >
      {/* Background System */}
      {/* Warm Sunset Gradient Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ffffff] via-[#dbeafe] to-[#2563eb]" />
      {/* Spiritual Dark Overlay for Content Readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      {/* Floating Blurred Ambient Circles */}
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-golden/10 blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-deep-orange/10 blur-[130px]" />

      {/* Very Light Lotus Pattern (Subtle Background Detail) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-[600px] h-[600px] text-golden fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Detailed Lotus Flower Path */}
          <path d="M50 15 C45 35 45 65 50 80 C55 65 55 35 50 15 Z" />
          <path d="M50 35 C35 40 30 60 48 78 C30 70 25 50 50 35 Z" />
          <path d="M50 35 C65 40 70 60 52 78 C70 70 75 50 50 35 Z" />
          <path d="M50 45 C20 48 15 70 45 80 C15 70 10 50 50 45 Z" />
          <path d="M50 45 C80 48 85 70 55 80 C85 70 90 50 50 45 Z" />
          <path d="M50 55 C5 58 0 78 40 82 C0 78 0 62 50 55 Z" />
          <path d="M50 55 C95 58 100 78 60 82 C100 78 100 62 50 55 Z" />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Messaging & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6 lg:space-y-5"
          >
            {/* Golden Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 rounded-full border border-golden/30 bg-golden/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-golden backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-golden animate-pulse" />
                Trusted Holistic Wellness Center
              </div>
            </motion.div>

            {/* Typography Masterpiece Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-white"
            >
              Healing Begins <br />
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-golden via-[#e9c46a] to-deep-orange">
                From Within
              </span>
            </motion.h1>

            {/* Elite Wellness Subtitle */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/80 font-sans"
            >
              Pavaki Therapy Clinic & Training Center offers Reiki Healing, Meditation,
              Crystal Healing, Tarot Guidance, Buddha Healing and Professional Training Programs
              to help people achieve inner peace, emotional balance and spiritual growth.
            </motion.p>

            {/* Elegant CTAs */}
            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-golden to-deep-orange px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-golden/20 hover:shadow-golden/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-golden focus:ring-offset-2 focus:ring-offset-[#120b06]"
              >
                Explore Services
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#120b06]"
              >
                Book Consultation
              </button>
            </motion.div>

            {/* Premium Stat Indicators */}
            <motion.div
              variants={statsContainerVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl"
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={statItemVariants}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2 text-white">
                    <span role="img" aria-label={stat.label} className="text-lg">
                      {stat.icon}
                    </span>
                    <span className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/60 font-sans leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Image & Floating Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-4 lg:py-0">
            {/* Behind‑image Blurred Golden Circles */}
            <div className="absolute h-64 w-64 rounded-full bg-golden/20 blur-[80px]" />
            <div className="absolute h-56 w-56 rounded-full bg-deep-orange/20 blur-[100px] translate-x-12 translate-y-12" />

            {/* Floating Glassmorphic Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[340px] xl:max-w-[380px] aspect-[4/5] rounded-[32px] p-3 bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl overflow-hidden"
              style={{
                boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.15)",
              }}
            >
              {/* Inner Floating Animation Wrapper */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative rounded-[24px] overflow-hidden"
              >
                {/* Premium Golden Glow Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-golden/20 via-transparent to-transparent z-10 pointer-events-none" />

                <img
                  src={buddhaImg}
                  alt="Buddha statue meditating in tranquil environment"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Center: Bouncing Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}
          className="flex flex-col items-center gap-1.5 text-xs text-white/50 tracking-widest uppercase hover:text-golden transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiArrowDown className="text-lg text-golden" />
          <span className="font-sans font-medium">Scroll to Explore</span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
