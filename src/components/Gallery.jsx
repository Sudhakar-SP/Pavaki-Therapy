import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaSearchPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { galleryImages } from "../assets/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Derived selected image
  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex] : null;

  // Lightbox navigation helpers
  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  // Keyboard support: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, goNext, goPrev]);

  // Stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <AnimatedSection
      id="gallery"
      className="section-padding bg-[#FAF7F2] relative overflow-hidden"
    >
      {/* Soft Golden Ambient Blur Circles */}
      <div className="absolute right-[-8%] top-[15%] h-[400px] w-[400px] rounded-full bg-golden/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-8%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-deep-orange/5 blur-[90px] pointer-events-none" />
      <div className="absolute left-[40%] top-[5%] h-[250px] w-[250px] rounded-full bg-golden/3 blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Premium Section Header */}
        <SectionHeading
          subtitle="Sanctuary Gallery"
          title="Moments of Healing"
          description="A visual journey into our peaceful sanctuary, certified training workshops, and transformational services."
        />

        {/* Uniform Grid — All Cards Same Size */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 mt-14"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.12)",
              }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-golden/15 bg-white/50 backdrop-blur-sm shadow-sm transition-all duration-500 hover:border-golden/35 hover:bg-white/80"
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
            >
              {/* Fixed-height image container: 220px mobile / 260px tablet / 320px desktop */}
              <div className="relative h-[220px] sm:h-[260px] lg:h-[320px] overflow-hidden rounded-[24px] m-1.5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Golden Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120b06]/75 via-[#120b06]/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                {/* Glassmorphic Zoom Button */}
                <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-lg opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 hover:bg-white/25">
                  <FaSearchPlus className="text-white text-[10px]" />
                </div>

                {/* Caption Roll-up on Hover */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-golden block mb-1">
                    Pavaki Sanctuary
                  </span>
                  <p className="text-sm font-semibold text-white leading-snug tracking-tight">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Premium Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery Lightbox"
          >
            {/* Close Button — Top Right */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Close lightbox"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Image Counter — Top Left */}
            <div className="absolute top-6 left-6 z-20 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-4 py-1.5">
              <span className="text-xs font-bold text-white/80 tracking-wider">
                {selectedIndex + 1}{" "}
                <span className="text-white/40">/ {galleryImages.length}</span>
              </span>
            </div>

            {/* Previous Button — Left Side */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 sm:left-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-golden hover:border-golden/50 hover:text-black hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-golden/30"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Next Button — Right Side */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 sm:right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:bg-golden hover:border-golden/50 hover:text-black hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-golden/30"
              aria-label="Next image"
            >
              <FaChevronRight className="text-sm" />
            </button>

            {/* Main Image Glass Card */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative max-w-5xl w-full max-h-[88vh] overflow-hidden rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[72vh] object-contain rounded-[22px]"
              />

              {/* Caption Footer */}
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-white/90 tracking-tight">
                    {selectedImage.alt}
                  </p>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-golden mt-0.5 block">
                    Pavaki Therapy Clinic & Training Center
                  </span>
                </div>

                {/* Dot indicators */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(i);
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        i === selectedIndex
                          ? "w-6 h-2 bg-golden"
                          : "w-2 h-2 bg-white/25 hover:bg-white/50"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default Gallery;
