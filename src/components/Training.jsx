import { motion } from "framer-motion";
import { FaClock, FaGraduationCap, FaCertificate, FaArrowRight } from "react-icons/fa";
import { trainingPrograms } from "../assets/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const Training = () => {
  // Separate core levels from supplemental offerings
  const reikiJourney = trainingPrograms.slice(0, 4);
  const generalPrograms = trainingPrograms.slice(4);

  // Smooth scroll to contact
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection id="training" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Premium Backdrops */}
      <div className="absolute right-[-10%] top-[25%] h-[350px] w-[350px] rounded-full bg-golden/5 blur-[90px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-deep-orange/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Training & Certification"
          title="Learn the Sacred Art of Healing"
          description="Embark on a structured spiritual journey under the direct lineage guidance of Healing Master Nimmati Satheesh."
        />

        {/* Part 1: The Reiki Path (Alternating / Step Timeline) */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-golden/60 via-golden/20 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 md:space-y-16">
            {reikiJourney.map((program, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={program.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 h-4.5 w-4.5 rounded-full bg-white border-[3px] border-golden shadow-md -translate-x-1/2 z-10" />

                  {/* Card Container */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.1)" }}
                      className="group p-8 rounded-3xl bg-[#FAF7F2]/50 border border-golden/10 hover:border-golden/30 backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-white"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-golden border border-golden/10 shadow-sm">
                          <FaClock className="text-golden" />
                          {program.duration}
                        </span>
                        <span className="text-xs font-bold text-golden/65 tracking-widest uppercase">
                          Step 0{index + 1}
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-gray tracking-tight">
                        {program.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-soft-gray font-sans">
                        {program.description}
                      </p>

                      <button
                        onClick={scrollToContact}
                        className="mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-golden group-hover:text-deep-orange transition-colors"
                      >
                        <span>Enroll Now</span>
                        <FaArrowRight className="text-[10px] transform transition-transform group-hover:translate-x-1" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Workshops & Certifications Supplemental cards */}
        <div className="mt-24 pt-16 border-t border-golden/10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-dark-gray">
              Specialized Workshops & Accreditations
            </h3>
            <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-soft-gray font-sans">
              Expand your healing knowledge or establish yourself as a professional healer with our certified modules.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 mt-12 max-w-4xl mx-auto">
            {generalPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.1)" }}
                className="group relative overflow-hidden p-8 rounded-3xl bg-[#FAF7F2]/40 border border-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-golden/30 hover:bg-white"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-golden/5 transition-transform duration-300 group-hover:scale-150 pointer-events-none" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-golden to-deep-orange shadow-md">
                    {index === 0 ? (
                      <FaGraduationCap className="text-xl text-white" />
                    ) : (
                      <FaCertificate className="text-xl text-white" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="font-display text-lg sm:text-xl font-bold text-dark-gray tracking-tight">
                        {program.title}
                      </h4>
                      <span className="shrink-0 flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-golden border border-golden/10">
                        {program.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-soft-gray font-sans">
                      {program.description}
                    </p>
                    <button
                      onClick={scrollToContact}
                      className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-golden group-hover:text-deep-orange transition-colors"
                    >
                      <span>Inquire Details</span>
                      <FaArrowRight className="text-[10px] transform transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Training;
