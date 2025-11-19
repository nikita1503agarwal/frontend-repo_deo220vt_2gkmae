import { useEffect } from 'react'

// Adds body classes based on scroll position for global micro-interactions
export default function ScrollEffects() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const docH = document.body.scrollHeight - window.innerHeight
      const p = docH > 0 ? y / docH : 0
      document.body.style.setProperty('--scroll', String(p))
      if (y > 32) document.body.classList.add('scrolled')
      else document.body.classList.remove('scrolled')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return null
}
