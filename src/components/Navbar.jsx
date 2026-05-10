import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { navLinks } from '../data/navbar'

export default function Navbar() {
    const navRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(navRef.current,
                { y: -80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
            )
        }, navRef)

        const onScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', onScroll)
        return () => { ctx.revert(); window.removeEventListener('scroll', onScroll) }
    }, [])

    const scrollTo = useCallback((id) => {
        setMenuOpen(false)
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 px-5 py-3 rounded-full transition-all duration-500 opacity-0 ${scrolled
                    ? 'bg-obsidian/80 backdrop-blur-xl border border-champagne/15 shadow-[0_8px_40px_rgba(0,0,0,0.6)]'
                    : 'bg-transparent'
                    }`}
                style={{ width: 'min(720px, 92vw)' }}
            >
                {/* Logo */}
                <button
                    onClick={() => scrollTo('#home')}
                    className="font-sans font-black text-lg tracking-tight text-ivory whitespace-nowrap"
                >
                    AR<span className="text-champagne">.</span>
                </button>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-7">
                    {navLinks.map(({ label, id }) => (
                        <li key={label}>
                            <button
                                onClick={() => scrollTo(id)}
                                className="font-sans text-sm font-medium text-ivory/60 hover:text-ivory link-lift"
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <button
                    onClick={() => scrollTo('#contact')}
                    className="btn-magnetic btn-slide hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-champagne text-obsidian text-sm font-bold"
                >
                    <span className="slide-bg rounded-full" />
                    <span className="relative z-10">Hire Me</span>
                </button>

                {/* Burger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className={`block w-5 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-5 h-px bg-ivory transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-px bg-ivory transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                aria-hidden={!menuOpen}
            >
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map(({ label, id }) => (
                        <li key={label}>
                            <button
                                onClick={() => scrollTo(id)}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo(id)}
                                className="font-sans text-4xl font-black text-ivory/40 hover:text-ivory transition-colors duration-300"
                                tabIndex={menuOpen ? 0 : -1}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => scrollTo('#contact')}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollTo('#contact')}
                    className="mt-12 px-8 py-4 rounded-full bg-champagne text-obsidian font-bold text-lg btn-magnetic"
                    tabIndex={menuOpen ? 0 : -1}
                >
                    Hire Me
                </button>
            </div>
        </>
    )
}
