import { motion } from "framer-motion";
import {
  GiHealing,
  GiMeditation,
  GiCrystalBall,
  GiSoundWaves,
  GiSparkles,
  GiBookCover,
  GiPrayerBeads,
  GiConversation,
} from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi";
import { services } from "../assets/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const iconMap = {
  reiki: GiHealing,
  training: GiBookCover,
  meditation: GiMeditation,
  tarot: GiCrystalBall,
  buddha: GiPrayerBeads,
  crystal: GiSparkles,
  sound: GiSoundWaves,
  counseling: GiConversation,
};

const Services = () => {
  // Stagger Animations for Cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <AnimatedSection id="services" className="section-padding bg-[#FAF7F2] relative overflow-hidden">
      {/* Luxury Wellness Backdrops */}
      <div className="absolute left-[-10%] top-[20%] h-[300px] w-[300px] rounded-full bg-golden/5 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[20%] h-[350px] w-[350px] rounded-full bg-deep-orange/5 blur-[100px] pointer-events-none" />

      {/* Subtle Lotus Background Silhouette */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-[500px] h-[500px] text-golden fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 15 C45 35 45 65 50 80 C55 65 55 35 50 15 Z" />
          <path d="M50 35 C35 40 30 60 48 78 C30 70 25 50 50 35 Z" />
          <path d="M50 35 C65 40 70 60 52 78 C70 70 75 50 50 35 Z" />
          <path d="M50 45 C20 48 15 70 45 80 C15 70 10 50 50 45 Z" />
          <path d="M50 45 C80 48 85 70 55 80 C85 70 90 50 50 45 Z" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Improved Section Header */}
        <SectionHeading
          subtitle="Our Healing Services"
          title="Transform Your Mind, Body & Soul"
          description="Explore our curated range of professional, spiritual, and holistic wellness therapies, masterfully designed to guide you toward alignment and peace."
        />

        {/* Services Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.12)" }}
                className="group flex flex-col justify-between p-8 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-golden/30 hover:bg-white/80"
              >
                <div>
                  {/* Luxury Floating Icon Wrapper */}
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-golden to-deep-orange shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-golden/20">
                    <Icon className="text-3xl text-white transition-transform duration-300 group-hover:scale-105" />
                    
                    {/* Circle Glow Effect behind the active icon */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title & Description with Luxury Typography */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-dark-gray tracking-tight">
                    {service.title}
                  </h3>

                  {/* Subtle Decorative Golden Divider Line */}
                  <div className="my-4 h-[1px] w-12 bg-golden/30 transition-all duration-500 group-hover:w-full" />

                  <p className="text-sm leading-relaxed text-soft-gray font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button at Bottom */}
                <div className="mt-8 pt-4 border-t border-black/5 flex items-center">
                  <button
                    onClick={() => {
                      // Smooth scroll to contact for booking details or query
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-golden group-hover:text-deep-orange transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <HiArrowRight className="text-sm transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
