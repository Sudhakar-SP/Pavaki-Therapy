import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BRAND_NAME = 'Pavaki Therapy'

// A handful of soft petals that drift upward in the background —
// ambient atmosphere, not the focal point.
const PETALS = [
  { left: '18%', size: 10, delay: 0, duration: 7 },
  { left: '32%', size: 6, delay: 1.4, duration: 8.5 },
  { left: '68%', size: 8, delay: 0.6, duration: 7.5 },
  { left: '82%', size: 6, delay: 2.1, duration: 9 },
  { left: '50%', size: 7, delay: 1.1, duration: 8 },
]

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  // Drives the numeric counter in sync with the progress bar's fill
  useEffect(() => {
    const duration = 2000
    const start = performance.now()

    let frame
    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct < 100) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-cream"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Ambient drifting petals */}
      {PETALS.map((p, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute bottom-0 rounded-full bg-golden/25"
          style={{ left: p.left, width: p.size, height: p.size }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: -420, opacity: [0, 0.6, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Soft ambient glow behind the emblem */}
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-golden/10 blur-3xl" />

      <motion.div
        className="relative flex h-32 w-32 items-center justify-center"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Mandala ring — a series of ticks rather than a plain circle */}
        <motion.svg
          viewBox="0 0 120 120"
          className="absolute inset-0 h-full w-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * 360
            return (
              <line
                key={i}
                x1="60"
                y1="6"
                x2="60"
                y2="14"
                className={i % 3 === 0 ? 'stroke-golden/70' : 'stroke-golden/25'}
                strokeWidth={i % 3 === 0 ? 2 : 1}
                transform={`rotate(${angle} 60 60)`}
              />
            )
          })}
        </motion.svg>

        {/* Inner counter-rotating ring */}
        <motion.div
          className="absolute inset-5 rounded-full border border-deep-orange/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />

        {/* Brand crest — matches the navbar's bordered monogram, breathing gently */}
        <motion.div
          className="relative flex h-14 w-14 items-center justify-center rounded-sm border border-golden/50 bg-cream shadow-card"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="font-display text-xl font-semibold tracking-wide text-dark-gray">
            P
          </span>
        </motion.div>
      </motion.div>

      {/* Wordmark, revealed letter by letter */}
      <motion.h2
        className="mt-8 flex font-display text-2xl font-semibold tracking-tight text-dark-gray"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.045, delayChildren: 0.3 } },
        }}
      >
        {BRAND_NAME.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.span
        className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-golden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
      >
        Clinic &amp; Training Center
      </motion.span>

      <motion.p
        className="mt-3 text-sm text-soft-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Healing Begins From Within
      </motion.p>

      {/* Progress bar with a shimmering fill */}
      <motion.div
        className="relative mt-8 h-1 w-44 overflow-hidden rounded-full bg-golden/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="relative h-full overflow-hidden rounded-full bg-gradient-golden"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <motion.span
            className="absolute inset-y-0 left-0 w-8 bg-white/40 blur-sm"
            animate={{ x: ['-2rem', '13rem'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </motion.div>

      <motion.span
        className="mt-3 font-display text-xs tabular-nums tracking-widest text-soft-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {progress}%
      </motion.span>
    </motion.div>
  )
}

export default LoadingScreen