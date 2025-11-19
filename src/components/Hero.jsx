import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Futuristic layered background */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,#0a1220_0%,#070d19_40%,#040a16_70%,#03070f_100%)]" />

      {/* Subtle grid mesh using SVG pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="gridFade" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5"/>
            <stop offset="70%" stopColor="white" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#gridFade)" />
      </svg>

      {/* Energetic diagonal light streaks (yellow accents) */}
      <motion.div
        aria-hidden
        initial={{ x: -150, opacity: 0.35 }}
        animate={{ x: 150 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 6, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-1/4 top-10 h-64 w-[120%] -rotate-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent" />
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ x: 120, opacity: 0.25 }}
        animate={{ x: -120 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 8, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-1/4 bottom-16 h-48 w-[120%] rotate-[8deg]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent" />
      </motion.div>

      {/* Pulse ring – nod to heart rate */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ boxShadow: '0 0 0 0 rgba(250,204,21,0.25)' }}
        animate={{ boxShadow: [
          '0 0 0 0 rgba(250,204,21,0.22)',
          '0 0 0 30px rgba(250,204,21,0.0)'
        ] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Heartbeat line accent at bottom of banner */}
      <motion.svg
        viewBox="0 0 1200 120"
        className="absolute bottom-0 left-1/2 w-[140%] -translate-x-1/2 opacity-40"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
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
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
        />
      </motion.svg>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-3xl">
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
