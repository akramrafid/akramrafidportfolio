import { useEffect, useRef, useState } from 'react'

/* ── Animated Counter ── */
function Counter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const start = performance.now()
                    const tick = (now) => {
                        const progress = Math.min((now - start) / duration, 1)
                        const ease = 1 - Math.pow(1 - progress, 4)
                        setCount(Math.floor(ease * target))
                        if (progress < 1) requestAnimationFrame(tick)
                        else setCount(target)
                    }
                    requestAnimationFrame(tick)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, duration])

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    )
}

export default function PolyJute() {
    const sectionRef = useRef(null)

    useEffect(() => {
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {
                    // Header reveal
                    gsap.fromTo(
                        '.pj-header',
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
                    )
                    // Card reveal
                    gsap.fromTo(
                        '.pj-card',
                        { y: 70, opacity: 0, scale: 0.97 },
                        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
                    )
                    // Stats stagger
                    gsap.fromTo(
                        '.pj-stat',
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: '.pj-stats', start: 'top 80%' } }
                    )
                    // Tags stagger
                    gsap.fromTo(
                        '.pj-tag',
                        { x: -20, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: '.pj-card', start: 'top 70%' } }
                    )
                    // Decorative line draw
                    gsap.fromTo(
                        '.pj-line',
                        { scaleX: 0 },
                        { scaleX: 1, duration: 1.4, ease: 'power4.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
                    )
                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    const stats = [
        { value: 3500, suffix: '+', label: 'Teams Competed' },
        { value: 45, suffix: '', label: 'Universities' },
        { value: 1000000, suffix: '$', label: 'Prize Pool' },
    ]

    const tags = ['Social Entrepreneurship', 'Hult Prize', 'National Champions', 'Sustainability', 'Innovation', 'East Delta University']

    return (
        <section ref={sectionRef} className="section-pad px-6 md:px-16 max-w-7xl mx-auto">

            {/* Header */}
            <div className="pj-header mb-12">
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">Press &amp; Recognition</span>
                <h2 className="mt-3 font-sans font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight">
                    Making headlines<br />
                    <em className="font-serif font-normal text-champagne not-italic">globally.</em>
                </h2>
                <div className="pj-line mt-6 h-px bg-gradient-to-r from-champagne/40 via-champagne/10 to-transparent origin-left" />
            </div>

            {/* Main Feature Card */}
            <div className="pj-card relative rounded-4xl overflow-hidden border border-ivory/8 bg-gradient-to-br from-slate/40 via-obsidian to-obsidian group hover:border-champagne/20 transition-colors duration-500">

                {/* Glow */}
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-champagne/5 blur-3xl pointer-events-none group-hover:bg-champagne/10 transition-all duration-700" />

                {/* Hero Image */}
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <img
                        src="https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2025/05/20/hult_prize.jpg"
                        alt="PolyJute Team — Hult Prize Bangladesh National Champions"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

                    {/* Press badge overlaid on image */}
                    <div className="absolute top-5 left-6 flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian/70 backdrop-blur-sm border border-champagne/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-champagne pulse-dot" />
                            <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">Featured in TBS News</span>
                        </div>
                        <span className="font-mono text-[10px] text-ivory/50 uppercase tracking-widest">2025</span>
                    </div>

                    {/* Champion badge on image */}
                    <div className="absolute top-5 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-champagne/20 backdrop-blur-sm border border-champagne/30">
                        <span className="text-sm">🏆</span>
                        <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">National Champions</span>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-0">

                    {/* Left: Content */}
                    <div className="md:col-span-3 p-8 md:p-12 flex flex-col gap-8">

                        {/* Title */}
                        <div>
                            <h3 className="font-sans font-black text-[clamp(1.4rem,3.5vw,2.4rem)] leading-tight tracking-tight text-ivory">
                                PolyJute Team Wins
                                <span className="text-champagne"> National Round</span>
                                <br />of Hult Prize Bangladesh
                            </h3>
                            <p className="mt-4 font-sans text-sm text-ivory/45 leading-relaxed max-w-lg">
                                The PolyJute team from East Delta University emerged as national champions at the Hult Prize — often dubbed the "Student Nobel Prize" — beating 3,500+ teams across 45 universities to represent Bangladesh on the global stage, competing for <strong className="text-champagne font-semibold">$1,000,000</strong> in seed funding.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {tags.map(tag => (
                                <span
                                    key={tag}
                                    className="pj-tag font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-ivory/10 text-ivory/40 hover:border-champagne/30 hover:text-champagne transition-colors duration-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href="https://www.tbsnews.net/bangladesh/education/polyjute-team-wins-national-round-hult-prize-bangladesh-1147046"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-magnetic btn-slide inline-flex items-center gap-3 self-start px-6 py-3 rounded-full border border-ivory/15 text-ivory text-sm font-bold hover:border-champagne/40 transition-colors duration-300"
                        >
                            <span className="slide-bg rounded-full" />
                            <span className="relative z-10">Read Full Article ↗</span>
                        </a>
                    </div>

                    {/* Right: Stats */}
                    <div className="pj-stats md:col-span-2 border-t md:border-t-0 md:border-l border-ivory/6 p-8 md:p-12 flex flex-col justify-center gap-10">

                        {/* Trophy icon */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-2xl bg-champagne/10 border border-champagne/20 flex items-center justify-center text-2xl">
                                🏆
                            </div>
                            <div>
                                <p className="font-mono text-[10px] text-champagne uppercase tracking-widest">National Champion</p>
                                <p className="font-sans text-xs text-ivory/30 mt-0.5">Hult Prize Bangladesh 2025</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-ivory/6" />

                        {/* Stats */}
                        {stats.map(({ value, suffix, label }) => (
                            <div key={label} className="pj-stat">
                                <p className="font-sans font-black text-[clamp(1.8rem,3vw,2.8rem)] leading-none tracking-tight text-ivory">
                                    {suffix === '$' ? (
                                        <>$<Counter target={value} suffix="" duration={2200} /></>
                                    ) : (
                                        <><Counter target={value} suffix={suffix} duration={2200} /></>
                                    )}
                                </p>
                                <p className="font-mono text-[10px] text-ivory/30 uppercase tracking-widest mt-1.5">{label}</p>
                            </div>
                        ))}

                        {/* Source */}
                        <div className="mt-auto">
                            <p className="font-mono text-[9px] text-ivory/15 uppercase tracking-widest">Source: The Business Standard</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
