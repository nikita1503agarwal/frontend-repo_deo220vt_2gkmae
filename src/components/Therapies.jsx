import { motion } from 'framer-motion'
import { Snowflake, SunMedium, ThermometerSun, Activity, ScanLine, Handshake, Dumbbell } from 'lucide-react'

const therapies = [
  {
    icon: Snowflake,
    title: 'Cryotherapy',
    desc: 'Whole-body cold therapy to reduce inflammation, boost recovery, and elevate mood in just minutes.',
    color: 'from-sky-400/20 to-sky-600/10',
  },
  {
    icon: SunMedium,
    title: 'Red Light Therapy',
    desc: 'Targeted red and near-infrared light to accelerate healing and improve skin vitality.',
    color: 'from-rose-400/20 to-rose-600/10',
  },
  {
    icon: ThermometerSun,
    title: 'Infrared Sauna',
    desc: 'Deep, gentle heat for detox, circulation, stress relief, and overall wellness.',
    color: 'from-amber-400/20 to-amber-600/10',
  },
  {
    icon: Activity,
    title: 'Normatec Compression',
    desc: 'Pneumatic compression boots that speed recovery, reduce fatigue, and enhance circulation.',
    color: 'from-violet-400/20 to-violet-600/10',
  },
  {
    icon: ScanLine,
    title: 'InBody Scan',
    desc: 'Professional body composition analysis to track progress with precision metrics.',
    color: 'from-emerald-400/20 to-emerald-600/10',
  },
  {
    icon: Handshake,
    title: 'Massage Therapy',
    desc: 'Licensed therapists tailor sessions for mobility, pain relief, and relaxation.',
    color: 'from-blue-400/20 to-blue-600/10',
  },
  {
    icon: Dumbbell,
    title: 'Personal Training',
    desc: '1:1 coaching with data-driven programming to hit your goals efficiently.',
    color: 'from-yellow-400/20 to-yellow-600/10',
  },
]

export default function Therapies() {
  return (
    <section id="therapies" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-yellow-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Therapies
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {therapies.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${t.color} p-6 backdrop-blur`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
                  <t.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-1 text-sm text-slate-300/90">{t.desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-tr from-yellow-500/20 to-transparent blur-2xl transition-all duration-500 group-hover:-right-4 group-hover:-top-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
