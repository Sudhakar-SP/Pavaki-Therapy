import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../assets/data'

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  )
}

export default WhatsAppButton
