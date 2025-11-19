import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),rgba(12,74,110,0.05),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_60%)] blur-2xl" />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

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
