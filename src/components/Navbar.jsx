import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../assets/data";
import { useScrollPosition } from "../hooks/useScrollAnimation";
import logoImg from "../assets/78315.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  // Active section tracker on scroll
  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled
        ? "bg-white/85 border-b border-blue-200/80 py-3 shadow-md shadow-blue-900/10 backdrop-blur-lg"
        : "bg-white/50 border-b border-white/40 py-5 backdrop-blur-md"
        }`}
    >
      <div className="container-custom flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand Logo & Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-105">
            <img
              src={logoImg}
              alt="Pavaki Therapy logo"
              className="h-full w-full rounded-full object-cover"
            />
            {/* Soft pulse glow around logo */}
            <div className="absolute inset-0 rounded-full bg-golden/20 animate-ping -z-10" />
          </div>

          <div className="text-left">
            <span
              className="block font-display text-lg font-bold leading-tight tracking-tight text-[#0b1437] transition-colors duration-300"
            >
              Pavaki Therapy
            </span>
            <span
              className="block text-[10px] font-bold uppercase tracking-widest text-amber-700 transition-colors duration-300"
            >
              Clinic & Training Center
            </span>
          </div>
        </a>

        {/* Desktop Menu Navigation Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none ${isActive
                  ? "text-amber-700"
                  : "text-[#0b1437] hover:text-amber-700"
                  }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-amber-500/15 border border-amber-600/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl p-2 text-[#0b1437] transition-all duration-300 hover:bg-blue-900/10 lg:hidden focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full overflow-hidden bg-white/95 border-b border-blue-200/80 shadow-xl backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-1.5 px-6 py-8">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05 }}
                    className={`rounded-2xl px-5 py-3.5 text-base font-bold transition-all duration-300 flex items-center justify-between border ${isActive
                      ? "bg-amber-500/15 border-amber-600/40 text-amber-700"
                      : "bg-blue-50 border-blue-200/70 text-[#0b1437] hover:bg-blue-100 hover:text-amber-700"
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;