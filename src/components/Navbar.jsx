import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${solid ? 'backdrop-blur bg-slate-950/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold text-white">Innovative Health</a>
        <nav className="hidden items-center gap-6 text-slate-300 md:flex">
          <a href="#therapies" className="hover:text-white">Therapies</a>
          <a href="#training" className="hover:text-white">Training</a>
          <a href="#membership" className="hover:text-white">Memberships</a>
          <a href="#contact" className="rounded-full bg-yellow-500 px-4 py-2 font-semibold text-slate-900 hover:bg-yellow-400 transition">Book</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950/90 px-6 py-4 md:hidden">
          <nav className="grid gap-3 text-slate-300">
            <a href="#therapies" onClick={() => setOpen(false)} className="hover:text-white">Therapies</a>
            <a href="#training" onClick={() => setOpen(false)} className="hover:text-white">Training</a>
            <a href="#membership" onClick={() => setOpen(false)} className="hover:text-white">Memberships</a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-yellow-500 px-4 py-2 font-semibold text-slate-900 hover:bg-yellow-400 transition">Book</a>
          </nav>
        </div>
      )}
    </header>
  )
}
