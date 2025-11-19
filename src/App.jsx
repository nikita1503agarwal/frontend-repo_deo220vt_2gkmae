import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Therapies from './components/Therapies'
import Membership from './components/Membership'
import AboutContact from './components/AboutContact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,197,94,0),rgba(8,47,73,0.2),transparent_60%),radial-gradient(circle_at_90%_20%,rgba(250,204,21,0.07),transparent_30%)]"/>
      <Navbar />
      <main className="relative">
        <Hero />
        <Therapies />
        <Membership />
        <AboutContact />
        <footer className="relative border-t border-white/10 bg-slate-950/80 py-10 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Innovative Health — Seattle</p>
        </footer>
      </main>
    </div>
  )
}

export default App
