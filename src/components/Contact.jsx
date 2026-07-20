import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../assets/data";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
};

  // Shared input styling
  const inputClasses =
    "w-full rounded-2xl border border-golden/10 bg-white/60 backdrop-blur-sm px-5 py-3.5 text-sm text-dark-gray font-sans outline-none transition-all duration-300 placeholder:text-soft-gray/60 focus:border-golden/40 focus:ring-2 focus:ring-golden/15 focus:bg-white hover:border-golden/20";

  // Contact detail items
  const contactItems = [
    {
      icon: FaPhone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: contactInfo.address,
      href: null,
    },
  ];

  return (
    <AnimatedSection id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Ambient Circles */}
      <div className="absolute right-[-10%] top-[10%] h-[350px] w-[350px] rounded-full bg-golden/5 blur-[90px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-deep-orange/5 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Get In Touch"
          title="Begin Your Healing Journey"
          description="Reach out for consultations, class schedules, or any questions about our healing services and training programs."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mt-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-[32px] bg-[#FAF7F2]/40 border border-golden/10 p-8 sm:p-10 backdrop-blur-md"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-dark-gray/70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-dark-gray/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-dark-gray/70">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-xs font-bold uppercase tracking-wider text-dark-gray/70">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select a service</option>
                    <option value="reiki-healing">Reiki Healing</option>
                    <option value="reiki-training">Reiki Training</option>
                    <option value="meditation">Meditation</option>
                    <option value="tarot">Tarot Card Reading</option>
                    <option value="crystal-healing">Crystal Healing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-dark-gray/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your wellness goals..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-golden to-deep-orange px-10 py-4 text-base font-semibold text-black shadow-lg shadow-golden/20 transition-all duration-300 hover:scale-105 hover:shadow-golden/35 active:scale-95 focus:outline-none focus:ring-2 focus:ring-golden focus:ring-offset-2 w-full sm:w-auto"
              >
                <FaPaperPlane className="text-sm" />
                {submitted ? "Message Sent Successfully!" : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact Detail Cards */}
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-start gap-5 rounded-2xl border border-golden/10 bg-[#FAF7F2]/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-golden/25 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-golden to-deep-orange shadow-md transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-golden mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-dark-gray transition-colors hover:text-golden"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-dark-gray leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Quick Contact Button */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 p-5 transition-all duration-300 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 hover:shadow-sm"
            >
              <FaWhatsapp className="text-2xl text-[#25D366]" />
              <div>
                <p className="text-sm font-bold text-[#25D366]">Chat on WhatsApp</p>
                <p className="text-xs text-dark-gray/60">Quick response guaranteed</p>
              </div>
            </a>

            {/* Google Map Placeholder */}
            <div className="overflow-hidden rounded-2xl border border-golden/10 shadow-sm">
              <div className="flex h-56 items-center justify-center bg-[#FAF7F2]/60 backdrop-blur-sm">
                <div className="text-center px-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-golden/10">
                    <FaMapMarkerAlt className="text-2xl text-golden" />
                  </div>
                  <p className="font-display text-base font-bold text-dark-gray">
                    Find Us on Google Maps
                  </p>
                  <p className="mt-1 text-xs text-soft-gray leading-relaxed max-w-xs mx-auto">
                    123 Wellness Avenue, Spiritual District, Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
