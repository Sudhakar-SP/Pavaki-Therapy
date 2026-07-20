import { motion } from 'framer-motion'

const SectionHeading = ({ subtitle, title, description, light = false }) => {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      {subtitle && (
        <motion.span
          className={`mb-3 inline-block text-sm font-semibold uppercase tracking-widest ${
            light ? 'text-golden' : 'text-deep-orange'
          }`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        className={`font-display text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-dark-gray'
        }`}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/80' : 'text-soft-gray'
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-golden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </div>
  )
}

export default SectionHeading
