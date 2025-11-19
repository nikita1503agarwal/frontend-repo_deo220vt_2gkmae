import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Dumbbell, Flame, Timer, Activity, HeartPulse } from 'lucide-react'

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength & Conditioning',
    desc: 'Progressive resistance training, power development, and movement quality to build resilient strength.',
    color: 'from-yellow-400/20 to-yellow-600/10',
  },
  {
    icon: Flame,
    title: 'Fat Loss & Metabolic',
    desc: 'Interval work and metabolic circuits designed to accelerate fat loss while preserving lean mass.',
    color: 'from-rose-400/20 to-rose-600/10',
  },
  {
    icon: Activity,
    title: 'Athletic Performance',
    desc: 'Speed, agility, and power sessions that translate to your sport with measurable progress.',
    color: 'from-cyan-400/20 to-cyan-600/10',
  },
  {
    icon: Timer,
    title: 'Mobility & Longevity',
    desc: 'Joint-by-joint mobility and corrective work to move better, lift pain-free, and recover faster.',
    color: 'from-violet-400/20 to-violet-600/10',
  },
]

export default function Training() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.5])

  return (
    <section id="training" ref={ref} className="relative py-28">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Moving gradient orbs (design elements with scroll) */}
      <motion.div style={{ y: y1, opacity: glowOpacity }} className="pointer-events-none absolute -top-10 left-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15),transparent_60%)] blur-2xl" />
      <motion.div style={{ y: y2, opacity: glowOpacity }} className="pointer-events-none absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)] blur-2xl" />

      {/* Animated accent: heartbeat gif alternative as animated SVG */}
      <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 opacity-30" aria-hidden>
        <svg width="420" height="60" viewBox="0 0 420 60">
          <defs>
            <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0 30 L40 30 L60 15 L80 45 L100 30 L150 30 L170 10 L190 50 L210 30 L260 30 L280 18 L300 42 L320 30 L360 30 L380 12 L400 48 L420 30"
            fill="none"
            stroke="url(#lg)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.2 }}
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-yellow-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Personal Training & Programs
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} p-6 backdrop-blur`}
            >
              <div className="flex items-start gap-4">
                <div className="relative rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
                  <p.icon className="h-6 w-6 text-yellow-400" />
                  {/* Tiny animated element (gif-like) */}
                  <div className="pointer-events-none absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-300/90">{p.desc}</p>
                </div>
              </div>
              {/* Hover motion */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-tr from-yellow-500/20 to-transparent blur-2xl transition-all duration-500 group-hover:-right-4 group-hover:-top-4" />
            </motion.div>
          ))}
        </div>

        {/* Coach spotlight */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {[
            { name: 'Alex Chen, CSCS', focus: 'Strength & Performance', accent: 'from-yellow-400/20 to-yellow-600/10' },
            { name: 'Maya Rivera, CPT', focus: 'Hypertrophy & Mobility', accent: 'from-cyan-400/20 to-cyan-600/10' },
            { name: 'Ryan Patel, USAW', focus: 'Olympic Lifting & Speed', accent: 'from-violet-400/20 to-violet-600/10' },
          ].map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.accent} p-6`}
            >
              <div className="flex items-center gap-4">
                {/* Animated ring avatar placeholder (gif-style motion) */}
                <div className="relative h-14 w-14">
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-yellow-400/40 border-t-transparent" />
                  <div className="absolute inset-1 rounded-full bg-white/10" />
                  <HeartPulse className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{c.name}</h4>
                  <p className="text-sm text-slate-300/90">{c.focus}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-slate-300/90">
                <li>• Customized programming with weekly progressions</li>
                <li>• Technique-first coaching and video feedback</li>
                <li>• Integrated recovery: compression, light, sauna</li>
              </ul>
              <a href="#contact" className="mt-5 inline-flex items-center justify-center rounded-full bg-yellow-500 px-4 py-2 font-semibold text-slate-900 hover:bg-yellow-400 transition-colors">
                Book a Consult
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 6s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
