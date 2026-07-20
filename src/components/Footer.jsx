import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaHeart } from "react-icons/fa";
import { navLinks, services, socialLinks } from "../assets/data";

const socialIconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#120b06] text-white/70">
      {/* Subtle Golden Ambient Glow */}
      <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-golden/5 blur-[100px] pointer-events-none" />
      <div className="absolute right-[10%] bottom-[30%] h-[250px] w-[250px] rounded-full bg-deep-orange/5 blur-[90px] pointer-events-none" />

      <div className="container-custom relative z-10 px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-golden to-deep-orange shadow-md">
                <span className="font-display text-xl font-bold text-white">P</span>
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-white tracking-tight">
                  Pavaki Therapy
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-golden">
                  Clinic & Training Center
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              A sanctuary for holistic healing, spiritual growth, and transformative
              wellness. Healing begins from within.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:border-golden/50 hover:bg-golden hover:text-white hover:shadow-md hover:shadow-golden/15"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="mb-6 font-display text-base font-bold text-white tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-golden"
                  >
                    <span className="w-1 h-1 rounded-full bg-golden/40 group-hover:bg-golden transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="mb-6 font-display text-base font-bold text-white tracking-tight">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#services");
                    }}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-golden"
                  >
                    <span className="w-1 h-1 rounded-full bg-golden/40 group-hover:bg-golden transition-colors" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Newsletter */}
          <div>
            <h4 className="mb-6 font-display text-base font-bold text-white tracking-tight">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-golden/40 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-golden/40 shrink-0" />
                info@pavakitherapy.com
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-golden/40 shrink-0" />
                123 Wellness Avenue, Spiritual District, Chennai, Tamil Nadu 600001
              </li>
            </ul>

            {/* Mini Newsletter */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                Stay Connected
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 transition-all duration-300 focus-within:border-golden/30"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent px-4 py-3 text-xs text-white/70 placeholder:text-white/30 outline-none"
                  aria-label="Newsletter email"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-gradient-to-r from-golden to-deep-orange px-5 text-xs font-bold text-black transition-all duration-300 hover:opacity-90"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Pavaki Therapy Clinic & Training Center. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Crafted with <FaHeart className="text-golden text-[10px]" /> for Holistic Wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
