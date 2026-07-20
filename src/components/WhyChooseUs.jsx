import { motion } from "framer-motion";
import {
  FaHeart,
  FaUserGraduate,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import { whyChooseUs } from "../assets/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const iconMap = {
  personalized: FaHeart,
  trainer: FaUserGraduate,
  environment: FaLeaf,
  ethical: FaHandshake,
  guidance: FaLightbulb,
};

const WhyChooseUs = () => {
  // Stagger Animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <AnimatedSection
      id="why-choose-us"
      className="section-padding relative overflow-hidden bg-[#120b06] py-24"
    >
      {/* Background warm spiritual gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#120b06] via-[#1d120a] to-[#2b190f]" />
      
      {/* Subtle floating blurred golden circles */}
      <div className="absolute left-[5%] top-[10%] h-[350px] w-[350px] rounded-full bg-golden/5 blur-[95px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-deep-orange/5 blur-[105px] pointer-events-none" />

      {/* Lotus Background silhouette */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-[550px] h-[550px] text-golden fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 15 C45 35 45 65 50 80 C55 65 55 35 50 15 Z" />
          <path d="M50 35 C35 40 30 60 48 78 C30 70 25 50 50 35 Z" />
          <path d="M50 35 C65 40 70 60 52 78 C70 70 75 50 50 35 Z" />
        </svg>
      </div>

      <div className="container-custom relative z-10 text-center">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Your Journey to Wellness"
          description="Discover the difference of authentic, compassionate, and masterfully guided holistic care."
          light
        />

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -8, border: "1px solid rgba(212, 175, 55, 0.4)" }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-white/5 text-center backdrop-blur-md transition-all duration-300 hover:bg-white/10 shadow-lg"
              >
                {/* Micro Counter Indicator */}
                <span className="absolute top-4 right-6 text-sm font-semibold font-display text-white/20 group-hover:text-golden/50 transition-colors">
                  0{index + 1}
                </span>

                <div>
                  {/* Floating Circular Glowing Icon Frame */}
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-golden to-deep-orange shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-golden/20">
                    <Icon className="text-xl text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/70 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Subtle base lighting overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-3xl bg-golden/0 group-hover:bg-golden/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
