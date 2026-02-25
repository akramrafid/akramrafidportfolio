import { useEffect, useRef } from 'react'

/* ── Rotating Rings SVG (Card 1) ── */
function RingsAnimation() {
    return (
        <div className="relative w-40 h-40 mx-auto">
            <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
                <circle cx="80" cy="80" r="70" stroke="rgba(201,168,76,0.15)" strokeWidth="1" className="spin-slow" style={{ transformOrigin: '80px 80px' }} />
                <circle cx="80" cy="80" r="55" stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="6 4" className="spin-reverse" style={{ transformOrigin: '80px 80px' }} />
                <circle cx="80" cy="80" r="38" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5" className="spin-slow" style={{ transformOrigin: '80px 80px', animationDuration: '5s' }} />
                <circle cx="80" cy="80" r="4" fill="#C9A84C" />
                <circle cx="80" cy="10" r="3" fill="#C9A84C" opacity="0.8" className="spin-slow" style={{ transformOrigin: '80px 80px' }} />
                <circle cx="80" cy="150" r="2" fill="rgba(201,168,76,0.5)" className="spin-reverse" style={{ transformOrigin: '80px 80px' }} />
            </svg>
        </div>
    )
}

/* ── Scanning Laser Grid (Card 2) ── */
function LaserAnimation() {
    const cols = 8, rows = 5
    return (
        <div className="relative w-full overflow-hidden rounded-xl border border-ivory/5 bg-obsidian/50 p-4">
            {/* Dot grid */}
            <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                {Array.from({ length: cols * rows }).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-ivory/15 mx-auto" />
                ))}
            </div>
            {/* Laser line */}
            <div
                className="absolute inset-y-0 w-8 pointer-events-none scan-laser"
                style={{
                    background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6), transparent)',
                }}
            />
        </div>
    )
}

/* ── EKG / Waveform (Card 3) ── */
function EKGAnimation() {
    return (
        <div className="w-full border border-ivory/5 bg-obsidian/50 rounded-xl p-4 overflow-hidden">
            <svg viewBox="0 0 400 80" className="w-full" fill="none" preserveAspectRatio="none">
                <path
                    className="ekg-path"
                    d="M0,40 L60,40 L80,40 L95,10 L110,70 L125,40 L160,40 L180,40 L200,20 L210,60 L220,40 L260,40 L280,40 L295,5 L310,75 L325,40 L360,40 L380,40 L400,40"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M0,40 L400,40"
                    stroke="rgba(201,168,76,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />
            </svg>
            <div className="flex justify-between mt-2">
                <span className="font-mono text-[9px] text-ivory/20">00:00</span>
                <span className="font-mono text-[9px] text-champagne">LIVE</span>
                <span className="font-mono text-[9px] text-ivory/20">00:30</span>
            </div>
        </div>
    )
}

const steps = [
    {
        num: '01',
        title: 'Discover',
        desc: 'Deep-dive into your goals, audience, and competitive landscape. Every pixel we place must earn its existence.',
        anim: <RingsAnimation />,
        bg: 'from-obsidian to-slate',
    },
    {
        num: '02',
        title: 'Design',
        desc: 'Wireframes become living systems. Components are defined, interactions planned, and every breakpoint considered.',
        anim: <LaserAnimation />,
        bg: 'from-slate to-obsidian',
    },
    {
        num: '03',
        title: 'Develop',
        desc: 'Production-grade code. GSAP-animated, performance-tested, and deployed with precision. Zero compromise.',
        anim: <EKGAnimation />,
        bg: 'from-obsidian to-[#0a0a14]',
    },
]

export default function Protocol() {
    const sectionRef = useRef(null)

    useEffect(() => {
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {
                    gsap.fromTo(
                        '.protocol-header',
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
                    )
                    gsap.fromTo(
                        '.protocol-card',
                        { y: 60, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15,
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
                        }
                    )
                    // Projects header
                    gsap.fromTo(
                        '.proj-header',
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.proj-header', start: 'top 85%' } }
                    )
                    // Project cards stagger
                    gsap.fromTo(
                        '.proj-card',
                        { y: 60, opacity: 0, scale: 0.97 },
                        {
                            y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', stagger: 0.14,
                            scrollTrigger: { trigger: '.proj-header', start: 'top 75%' },
                        }
                    )
                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    return (
        <section id="protocol" ref={sectionRef} className="section-pad px-6 md:px-16 max-w-7xl mx-auto">
            <div className="protocol-header mb-14">
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">My Process</span>
                <h2 className="mt-3 font-sans font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight">
                    The protocol behind<br />
                    <em className="font-serif font-normal italic text-champagne">every build.</em>
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                {steps.map(({ num, title, desc, anim, bg }) => (
                    <div
                        key={num}
                        className={`protocol-card rounded-4xl bg-gradient-to-br ${bg} border border-ivory/8 p-8 flex flex-col gap-6 hover:border-champagne/20 transition-colors duration-400`}
                    >
                        {/* Step number */}
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-xs text-champagne">{num}</span>
                            <div className="w-6 h-px bg-champagne/30" />
                        </div>

                        {/* Animation */}
                        <div className="py-2">{anim}</div>

                        {/* Text */}
                        <div>
                            <h3 className="font-sans font-bold text-xl text-ivory mb-2">{title}</h3>
                            <p className="font-sans text-sm text-ivory/40 leading-relaxed">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Selected Projects ── */}
            <div className="mt-20">
                <div className="proj-header flex items-end justify-between mb-10">
                    <div>
                        <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">Selected Work</span>
                        <h2 className="mt-2 font-sans font-black text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight">
                            Projects &amp; <em className="font-serif font-normal text-champagne not-italic">Experience.</em>
                        </h2>
                    </div>
                    <span className="hidden md:block font-mono text-[10px] text-ivory/20 uppercase tracking-widest">04 entries</span>
                </div>

                {/* ── Hero card: HarvestGuard ── */}
                <a
                    href="https://harvest-guard-eduu.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-card group relative rounded-4xl overflow-hidden flex flex-col md:flex-row border border-ivory/8 hover:border-champagne/25 transition-colors duration-500 mb-4 bg-gradient-to-br from-emerald-950/40 via-obsidian to-obsidian"
                    style={{ minHeight: '360px' }}
                >
                    {/* Ambient glow */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700" />

                    {/* Left: Info */}
                    <div className="relative z-10 flex flex-col justify-between p-8 md:p-12 md:w-1/2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">Live · 2025</span>
                            </div>
                            <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">AI · AgriTech · Web App</span>
                            <h3 className="mt-2 font-sans font-black text-[clamp(1.6rem,3.5vw,2.6rem)] leading-tight text-ivory">HarvestGuard</h3>
                            <p className="mt-3 font-sans text-sm text-ivory/45 leading-relaxed max-w-sm">
                                AI-powered crop protection platform for Bangladesh's farmers — real-time disease detection via image scanning, live weather alerts, and an interactive crop risk map to reduce the 30% post-harvest loss crisis.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Vite', 'Tailwind CSS', 'AI / ML', 'Weather API', 'Vercel'].map(t => (
                                    <span key={t} className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase tracking-widest">{t}</span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 font-mono text-xs text-champagne group-hover:gap-3 transition-all duration-300">
                                View Project <span>↗</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Mockup visual */}
                    <div className="relative md:w-1/2 h-56 md:h-auto overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=900&q=80"
                            alt="HarvestGuard"
                            className="w-full h-full object-cover object-center opacity-50 group-hover:opacity-65 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent md:block hidden" />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent md:hidden" />
                        {/* UI floating card */}
                        <div className="absolute bottom-6 right-6 bg-obsidian/80 backdrop-blur-md border border-ivory/10 rounded-2xl px-4 py-3">
                            <p className="font-mono text-[9px] text-ivory/30 uppercase tracking-widest">Crop Health</p>
                            <p className="font-sans font-bold text-emerald-400 text-lg">98.2%</p>
                        </div>
                    </div>
                </a>

                {/* ── Bottom 3 cards ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    {/* StudyHub */}
                    <a
                        href="https://study-hub-pi-bice.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-card group relative rounded-4xl overflow-hidden border border-ivory/8 hover:border-champagne/25 transition-colors duration-500 bg-gradient-to-br from-violet-950/40 via-obsidian to-obsidian flex flex-col"
                        style={{ minHeight: '320px' }}
                    >
                        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-violet-500/5 blur-3xl pointer-events-none group-hover:bg-violet-500/10 transition-all duration-700" />
                        <div className="relative z-10 p-7 flex flex-col gap-5 flex-1 justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 pulse-dot" />
                                    <span className="font-mono text-[10px] text-violet-400 uppercase tracking-widest">Live · 2025</span>
                                </div>
                                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">EdTech · Dev Tools</span>
                                <h3 className="mt-2 font-sans font-black text-xl text-ivory">Study Hub</h3>
                                <p className="mt-2 font-sans text-xs text-ivory/40 leading-relaxed">
                                    Community-driven developer roadmap platform — curated learning paths for Frontend, Backend, DevOps and more. Features auth system, resource filtering, and user-generated roadmaps.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {['React', 'Next.js', 'Tailwind', 'Auth', 'Vercel'].map(t => (
                                        <span key={t} className="font-mono text-[9px] px-2 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 uppercase tracking-widest">{t}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 font-mono text-xs text-champagne group-hover:gap-3 transition-all duration-300">
                                    View Project <span>↗</span>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* MoltenBD */}
                    <a
                        href="https://moltenbd.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-card group relative rounded-4xl overflow-hidden border border-ivory/8 hover:border-champagne/25 transition-colors duration-500 bg-gradient-to-br from-orange-950/40 via-obsidian to-obsidian flex flex-col"
                        style={{ minHeight: '320px' }}
                    >
                        <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-orange-500/5 blur-3xl pointer-events-none group-hover:bg-orange-500/10 transition-all duration-700" />
                        <div className="relative z-10 p-7 flex flex-col gap-5 flex-1 justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 pulse-dot" />
                                    <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest">Live · E-Commerce</span>
                                </div>
                                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">WordPress · WooCommerce</span>
                                <h3 className="mt-2 font-sans font-black text-xl text-ivory">Molten BD</h3>
                                <p className="mt-2 font-sans text-xs text-ivory/40 leading-relaxed">
                                    Official Bangladesh e-commerce platform for Molten Corporation — global sports equipment brand &amp; official ball supplier to FIFA, FIBA. Partnered with Bangladesh Football Federation (BFF).
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {['WordPress', 'WooCommerce', 'PHP', 'Custom CSS', 'SEO'].map(t => (
                                        <span key={t} className="font-mono text-[9px] px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 uppercase tracking-widest">{t}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 font-mono text-xs text-champagne group-hover:gap-3 transition-all duration-300">
                                    View Project <span>↗</span>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Springer Publishing — Work Experience */}
                    <a
                        href="https://www.springerpub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-card group relative rounded-4xl overflow-hidden border border-ivory/8 hover:border-champagne/25 transition-colors duration-500 bg-gradient-to-br from-sky-950/40 via-obsidian to-obsidian flex flex-col"
                        style={{ minHeight: '320px' }}
                    >
                        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-sky-500/5 blur-3xl pointer-events-none group-hover:bg-sky-500/10 transition-all duration-700" />
                        <div className="relative z-10 p-7 flex flex-col gap-5 flex-1 justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 pulse-dot" />
                                    <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest">2+ Years · Ongoing</span>
                                </div>
                                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">Video Editor · Publishing</span>
                                <h3 className="mt-2 font-sans font-black text-xl text-ivory">Springer Publishing</h3>
                                <p className="mt-2 font-sans text-xs text-ivory/40 leading-relaxed">
                                    Video Editor at Springer Publishing Company — a leading global publisher of healthcare books, textbooks &amp; medical journals for professionals, universities and institutions worldwide.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {['After Effects', 'Premiere Pro', 'Motion Graphics', 'Healthcare'].map(t => (
                                        <span key={t} className="font-mono text-[9px] px-2 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 uppercase tracking-widest">{t}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 font-mono text-xs text-champagne group-hover:gap-3 transition-all duration-300">
                                    View Site <span>↗</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
