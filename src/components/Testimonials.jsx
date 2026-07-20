import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../assets/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const AUTO_SLIDE_INTERVAL = 5000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <AnimatedSection id="testimonials" className="section-padding bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Ambient Circles */}
      <div className="absolute left-[-8%] top-[15%] h-[350px] w-[350px] rounded-full bg-golden/5 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-8%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-deep-orange/5 blur-[90px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Client Stories"
          title="What Our Clients Say"
          description="Real stories of transformation and healing from our cherished wellness community."
        />

        <div
          className="relative mx-auto max-w-4xl mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Card */}
          <div className="overflow-hidden rounded-[32px] bg-white/50 border border-white/80 p-10 sm:p-14 shadow-sm backdrop-blur-md">
            {/* Decorative Quote Mark */}
            <FaQuoteLeft className="mb-8 text-4xl text-golden/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                {/* Star Ratings */}
                <div className="mb-5 flex gap-1.5">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <FaStar key={i} className="text-sm text-golden" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg sm:text-xl leading-relaxed text-dark-gray/80 font-sans italic">
                  &ldquo;{testimonials[current].review}&rdquo;
                </p>

                {/* Client Profile */}
                <div className="mt-10 flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-golden to-deep-orange font-display text-xl font-bold text-white shadow-md">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-dark-gray tracking-tight">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sm text-golden font-semibold tracking-wide">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-golden/20 bg-white/60 text-golden backdrop-blur-sm transition-all duration-300 hover:bg-golden hover:text-white hover:shadow-md hover:shadow-golden/15 active:scale-95 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Progress Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-400 ${
                    i === current
                      ? "w-10 bg-golden shadow-sm"
                      : "w-2.5 bg-golden/25 hover:bg-golden/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-golden/20 bg-white/60 text-golden backdrop-blur-sm transition-all duration-300 hover:bg-golden hover:text-white hover:shadow-md hover:shadow-golden/15 active:scale-95 focus:outline-none"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
