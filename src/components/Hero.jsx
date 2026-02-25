import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
    const sectionRef = useRef(null)
    const linesRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                linesRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: 'power3.out',
                    stagger: 0.08,
                    delay: 1.0,
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    const addLine = (el) => { if (el && !linesRef.current.includes(el)) linesRef.current.push(el) }

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden"
        >
            {/* Background image — portrait positioned to the right */}
            <div
                className="absolute inset-0 bg-no-repeat"
                style={{
                    backgroundImage: `url('/hero-bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 25%',
                }}
            />

            {/* Overlay gradients — heavier on the left so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/30 to-transparent" />
            {/* Blue-tint vignette matching the photo's mood */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(30,60,120,0.15) 0%, transparent 70%)' }} />

            {/* Content — bottom-left */}
            <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-28 max-w-6xl">

                {/* Availability pill */}
                <div ref={addLine} className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-champagne/25 bg-champagne/5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                    <span className="font-mono text-xs text-ivory/60 tracking-widest uppercase">Available for projects</span>
                </div>

                {/* Hero headline */}
                <div className="overflow-hidden">
                    <h1 ref={addLine} className="font-sans font-black text-[clamp(2.8rem,9vw,8rem)] leading-[0.92] tracking-tight text-ivory">
                        Creativity meets
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <h1 ref={addLine} className="font-serif italic font-normal text-[clamp(3rem,10vw,9rem)] leading-[0.92] tracking-tight text-champagne">
                        Precision.
                    </h1>
                </div>

                {/* Sub line */}
                <p ref={addLine} className="mt-6 font-sans text-base md:text-xl text-ivory/50 max-w-lg leading-relaxed">
                    Akram Rafid — Creative Web Developer building{' '}
                    immersive digital experiences that feel{' '}
                    <em className="text-champagne not-italic font-medium">alive</em>.
                </p>

                {/* CTAs */}
                <div ref={addLine} className="mt-10 flex flex-wrap items-center gap-3 md:gap-4">
                    <button
                        onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-magnetic btn-slide inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full bg-champagne text-obsidian font-bold text-sm md:text-base shadow-[0_0_40px_rgba(201,168,76,0.3)]"
                    >
                        <span className="slide-bg rounded-full" />
                        <span className="relative z-10">View Projects</span>
                    </button>
                    <button
                        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-magnetic inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full border border-ivory/15 text-ivory/70 text-sm md:text-base font-medium hover:border-champagne/40 hover:text-ivory transition-colors"
                    >
                        About Me ↓
                    </button>
                </div>

                {/* Stats */}
                <div ref={addLine} className="mt-10 md:mt-14 flex items-center gap-6 md:gap-8 border-t border-ivory/8 pt-6 md:pt-8">
                    {[
                        { n: '3+', l: 'Years Experience' },
                        { n: '12+', l: 'Projects Delivered' },
                        { n: '100%', l: 'Client Satisfaction' },
                    ].map(({ n, l }) => (
                        <div key={l} className="text-center">
                            <span className="block font-sans font-black text-2xl md:text-3xl text-ivory tracking-tight">{n}</span>
                            <span className="block font-mono text-[10px] text-ivory/35 uppercase tracking-widest mt-0.5">{l}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute right-8 bottom-10 flex flex-col items-center gap-3 text-ivory/25 hidden md:flex">
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ writingMode: 'vertical-lr' }}>Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-champagne/60 to-transparent" />
            </div>
        </section>
    )
}
