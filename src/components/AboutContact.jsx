import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function AboutContact() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12])

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div style={{ rotate }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl">
            <h3 className="bg-gradient-to-br from-white to-yellow-200 bg-clip-text text-2xl font-bold text-transparent">About Innovative Health</h3>
            <p className="mt-4 text-slate-300/90">
              We blend cutting-edge recovery tech with expert human care. Our Seattle facility is designed for athletes, high-performers, and anyone seeking to feel their best — without long-term contracts.
            </p>
            <p className="mt-3 text-slate-300/90">
              Every therapy is guided by specialists. Track your progress with InBody scans and build sustainable habits with our coaches.
            </p>
          </motion.div>

          <div id="contact" className="rounded-3xl border border-yellow-400/20 bg-slate-900/50 p-8">
            <h3 className="text-xl font-semibold text-white">Contact & Location</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-yellow-400" /> Seattle, WA</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-yellow-400" /> (206) 555-0137</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-yellow-400" /> hello@innovativehealth.co</p>
            </div>
            <form className="mt-6 grid gap-3">
              <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60" placeholder="Your name" />
              <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60" placeholder="Email" type="email" />
              <textarea className="min-h-[120px] rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/60" placeholder="How can we help?" />
              <button type="button" className="rounded-full bg-yellow-500 px-6 py-3 font-semibold text-slate-900 hover:bg-yellow-400 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
