import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#therapies', label: 'Therapies' },
    { href: '#membership', label: 'Membership' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg ring-1 ring-yellow-300/40" />
              <span className="text-lg font-semibold tracking-tight text-white">Innovative Health</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-yellow-400 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-full bg-yellow-500 px-5 py-2 text-slate-900 font-semibold shadow-yellow-500/30 shadow hover:bg-yellow-400 transition-colors">
                Book Session
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 pb-4 md:hidden">
              <div className="flex flex-col gap-3 py-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200/90 hover:bg-white/5 hover:text-yellow-400 transition">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg bg-yellow-500 px-3 py-2 text-center font-semibold text-slate-900 hover:bg-yellow-400 transition">
                  Book Session
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
