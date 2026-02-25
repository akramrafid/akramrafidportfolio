import { useEffect, useRef } from 'react'

export default function Philosophy() {
    const sectionRef = useRef(null)
    const wordsRef = useRef([])

    useEffect(() => {
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {
                    // Line-by-line reveal
                    gsap.fromTo(
                        '.phil-line',
                        { y: 50, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: 'power3.out',
                            stagger: 0.12,
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
                        }
                    )
                    // Parallax texture
                    gsap.to('.phil-texture', {
                        yPercent: 20,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                        },
                    })
                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative overflow-hidden section-pad px-6 md:px-16"
            style={{ background: '#0D0D12' }}
        >
            {/* Parallax texture */}
            <div
                className="phil-texture absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    scale: '1.2',
                }}
            />

            {/* Champagne accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne/30 to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Tag */}
                <div className="phil-line mb-12 flex items-center gap-4">
                    <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">The Manifesto</span>
                    <div className="flex-1 h-px bg-champagne/15" />
                </div>

                {/* Contrast statements */}
                <div className="space-y-6">
                    <p className="phil-line font-sans text-lg md:text-2xl text-ivory/35 leading-snug max-w-3xl">
                        Most developers focus on: shipping fast, copying templates,<br className="hidden md:block" />
                        and calling it done.
                    </p>

                    <div className="phil-line">
                        <p className="font-sans font-black text-[clamp(1.6rem,4.5vw,3.2rem)] leading-tight tracking-tight text-ivory max-w-3xl">
                            I focus on:{' '}
                            <em className="font-serif font-normal italic text-champagne">
                                the feeling.
                            </em>
                        </p>
                    </div>

                    <p className="phil-line font-sans text-base md:text-lg text-ivory/40 max-w-2xl leading-relaxed">
                        The way a button yields under a cursor. The pause before a transition. The weight of text as it arrives on screen. That's the difference between a{' '}
                        <span className="text-ivory/70 font-medium">website</span> and a{' '}
                        <span className="text-champagne font-semibold">digital experience</span>.
                    </p>
                </div>

                {/* Experience highlight */}
                <div className="phil-line mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { num: '3+', label: 'Years building\nfor the web', sub: 'Including health science & sports at NY' },
                        { num: '12+', label: 'Projects\nshipped', sub: 'Startups, agencies, and enterprise clients' },
                        { num: '∞', label: 'Obsession\nwith craft', sub: 'Every pixel has a reason to exist' },
                    ].map(({ num, label, sub }) => (
                        <div key={num} className="border border-ivory/6 rounded-4xl p-6 hover:border-champagne/20 transition-colors duration-300">
                            <span className="font-sans font-black text-4xl text-champagne">{num}</span>
                            <p className="mt-2 font-sans font-semibold text-ivory whitespace-pre-line leading-tight">{label}</p>
                            <p className="mt-1.5 font-mono text-[11px] text-ivory/30 leading-relaxed">{sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
