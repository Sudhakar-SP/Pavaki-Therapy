import { motion } from 'framer-motion'

const AnimatedSection = ({ children, className = '', delay = 0, id }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
