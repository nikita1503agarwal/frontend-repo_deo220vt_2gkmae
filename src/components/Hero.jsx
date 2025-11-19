import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  // Parallax + subtle reactive motion on scroll
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const splineY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.97])

  return (
    <section ref={ref} className="relative min-h-[95vh] overflow-hidden">
      {/* Futuristic, calmer background: deep nebula + soft starfield grid */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,#0a1220_0%,#070d19_40%,#040a16_70%,#03070f_100%)]" />

      {/* Dim starfield dots */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-[0.18]" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="s" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 70 }).map((_, i) => (
            <circle key={i} cx={(i * 17) % 100} cy={(i * 29) % 100} r={(i % 3) + 0.3} fill="url(#s)" />
          ))}
        </svg>
      </motion.div>

      {/* Subtle mesh grid with fade */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="gridFade" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
            <stop offset="70%" stopColor="white" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#gridFade)" />
      </svg>

      {/* Soft neon slashes with slower movement to reduce jarring feel */}
      <motion.div
        aria-hidden
        initial={{ x: -120, opacity: 0.28 }}
        animate={{ x: 120 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 10, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-1/4 top-20 h-56 w-[120%] -rotate-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/12 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/8 to-transparent" />
      </motion.div>

      {/* Calm pulse ring (fitness nod) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ boxShadow: '0 0 0 0 rgba(250,204,21,0.15)' }}
        animate={{ boxShadow: [
          '0 0 0 0 rgba(250,204,21,0.12)',
          '0 0 0 36px rgba(250,204,21,0.0)'
        ] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* 3D Spline scene (dimmed + parallax) */}
      <motion.div style={{ y: splineY }} className="absolute inset-0">
        <div className="absolute inset-0 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 opacity-70">
          <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft vignette to calm motion edges */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent,rgba(3,7,15,0.4))]" />
      </motion.div>

      {/* Minimal heartbeat accent, slower */}
      <motion.svg
        viewBox="0 0 1200 120"
        className="absolute bottom-0 left-1/2 w-[160%] -translate-x-1/2 opacity-30"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <defs>
          <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde047"/>
            <stop offset="50%" stopColor="#facc15"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
        </defs>
        <motion.path
          d="M0 60 L80 60 L120 30 L160 90 L200 60 L300 60 L340 20 L380 100 L420 60 L540 60 L580 35 L620 85 L660 60 L760 60 L800 25 L840 95 L880 60 L1000 60 L1040 40 L1080 80 L1120 60 L1200 60"
          fill="none"
          stroke="url(#pulse)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 }}
        />
      </motion.svg>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div style={{ y: titleY, scale: titleScale }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-slate-200 backdrop-blur">
            Seattle • Gym & Wellness • Tech-forward
          </span>
          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-yellow-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
            Innovative Health
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Cryotherapy, Red Light Therapy, Infrared Sauna, Normatec Compression, InBody Scans, Massage Therapy, and Personal Training — all month-to-month with no contracts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#membership" className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-yellow-400 transition-colors">
              See Memberships
            </a>
            <a href="#therapies" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              Explore Therapies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
