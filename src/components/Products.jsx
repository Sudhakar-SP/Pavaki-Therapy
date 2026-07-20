import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import { products } from "../assets/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const Products = () => {
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

  const handleInquiry = (productTitle) => {
    // Smooth scroll to contact and auto-fill message or scroll to contact
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Try to find the message textarea to append the product inquiry
      const textarea = document.querySelector("textarea#message");
      if (textarea) {
        textarea.value = `Hello, I am interested in inquiring about the "${productTitle}" product. Please share pricing and availability details.`;
      }
    }
  };

  return (
    <AnimatedSection id="products" className="section-padding bg-[#FAF7F2] relative overflow-hidden">
      {/* Premium Ambient Overlays */}
      <div className="absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-golden/5 blur-[90px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-deep-orange/5 blur-[90px] pointer-events-none" />

      {/* Subtle Lotus Outline Backdrop */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-[500px] h-[500px] text-golden fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 15 C45 35 45 65 50 80 C55 65 55 35 50 15 Z" />
          <path d="M50 35 C35 40 30 60 48 78 C30 70 25 50 50 35 Z" />
          <path d="M50 35 C65 40 70 60 52 78 C70 70 75 50 50 35 Z" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Wellness Essentials"
          title="Spiritual Healing Products"
          description="Enhance your personal healing environment with authentic crystals, sacred accessories, and energy wellness products."
        />

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 22px 40px rgba(212, 175, 55, 0.12)" }}
              className="group flex flex-col justify-between overflow-hidden rounded-[32px] bg-white/40 border border-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-golden/30 hover:bg-white/80"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative h-60 overflow-hidden rounded-t-[32px] m-2">
                  {/* Floating Handcrafted Badge */}
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-white/95 border border-golden/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-golden shadow-sm">
                    Premium Quality
                  </span>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Action Badge */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleInquiry(product.title)}
                      className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white/95 border border-golden/10 py-3 text-xs font-bold uppercase tracking-wider text-dark-gray shadow-md backdrop-blur-sm transition-all hover:bg-golden hover:text-white"
                    >
                      <FaShoppingBag className="text-golden group-hover:text-white transition-colors" />
                      Inquire Details
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 text-left">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-dark-gray tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft-gray font-sans">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="h-1.5 w-0 bg-gradient-to-r from-golden to-deep-orange transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Products;
