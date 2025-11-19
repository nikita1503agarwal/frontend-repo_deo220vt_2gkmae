import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Recovery',
    price: 89,
    features: ['4 sessions / month', 'Any modality', 'No contract', 'Member rates on add-ons'],
    highlight: false,
  },
  {
    name: 'Performance',
    price: 159,
    features: ['8 sessions / month', 'Any modality', 'Priority booking', 'No contract'],
    highlight: true,
  },
  {
    name: 'Unlimited',
    price: 249,
    features: ['Unlimited visits', 'All modalities', 'Guest pass 1x/mo', 'Cancel anytime'],
    highlight: false,
  },
]

export default function Membership() {
  return (
    <section id="membership" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gradient-to-br from-white to-yellow-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Memberships — Month-to-Month, No Contract
        </motion.h2>
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative overflow-hidden rounded-2xl border ${p.highlight ? 'border-yellow-400/30 bg-slate-900/60' : 'border-white/10 bg-slate-900/40'} p-6 backdrop-blur`}
            >
              {p.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-yellow-500/90 px-3 py-1 text-xs font-semibold text-slate-900">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">${p.price}</span>
                <span className="text-sm text-slate-400">/mo</span>
              </div>
              <ul className="mt-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300">
                    <Check className="h-4 w-4 text-yellow-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-4 py-2 font-semibold text-slate-900 hover:bg-yellow-400 transition-colors">
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
