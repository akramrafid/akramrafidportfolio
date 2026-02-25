import { useEffect, useRef, useState } from 'react'

const VIDEO_ID = 'S2gMvwWHOYc'
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`
const VIDEO_TITLE = 'মাত্র ২৩ বছর বয়সে, পড়াশুনার পাশাপাশি ফ্রিল্যান্সিং করে আয় '
const VIDEO_TAGS = ['Video Editor', 'Online Business', 'Hustle', 'Freelancing']

export default function FeaturedVideo() {
    const sectionRef = useRef(null)
    const cardRef = useRef(null)
    const playBtnRef = useRef(null)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)

    /* ── GSAP scroll animations ── */
    useEffect(() => {
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {
                    // Header reveal
                    gsap.fromTo(
                        '.fv-header',
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }
                        }
                    )
                    // Card scale + fade
                    gsap.fromTo(
                        '.fv-card',
                        { scale: 0.9, opacity: 0, y: 60 },
                        {
                            scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' }
                        }
                    )
                    // Bottom strip
                    gsap.fromTo(
                        '.fv-strip',
                        { y: 30, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2,
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' }
                        }
                    )
                    // Pulse play button infinitely
                    gsap.to('.fv-play-ring', {
                        scale: 1.4,
                        opacity: 0,
                        duration: 1.4,
                        ease: 'power2.out',
                        repeat: -1,
                        yoyo: false,
                    })
                    // Play icon subtle bob
                    gsap.to('.fv-play-icon', {
                        y: -5,
                        duration: 1.8,
                        ease: 'sine.inOut',
                        repeat: -1,
                        yoyo: true,
                    })
                    // Floating label
                    gsap.to('.fv-float-label', {
                        y: -8,
                        duration: 2.2,
                        ease: 'sine.inOut',
                        repeat: -1,
                        yoyo: true,
                    })
                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    /* ── Close lightbox on Escape ── */
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setLightboxOpen(false) }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    /* ── Tilt on hover ── */
    const handleMouseMove = (e) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / (rect.width / 2)
        const dy = (e.clientY - cy) / (rect.height / 2)
        setTilt({ x: dy * -6, y: dx * 6 })
    }

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 })
        setHovered(false)
    }

    return (
        <>
            <section
                id="featured"
                ref={sectionRef}
                className="section-pad px-6 md:px-16 max-w-7xl mx-auto"
            >
                {/* ── Header ── */}
                <div className="fv-header mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-px w-8 bg-champagne" />
                            <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">
                                Featured Podcast
                            </span>
                        </div>
                        <h2 className="font-sans font-black text-[clamp(1.8rem,4.5vw,3.2rem)] leading-tight tracking-tight">
                            Watch the craft{' '}
                            <em className="font-serif font-normal text-champagne not-italic">in motion.</em>
                        </h2>
                        <p className="mt-3 text-sm text-ivory/40 max-w-md leading-relaxed">
                            In this space, I share what editing has taught me that every frame, every transition, every pause has purpose. Because when you edit with intention, a video stops being content… and becomes an experience.
                        </p>
                    </div>
                    <button
                        onClick={() => setLightboxOpen(true)}
                        className="btn-magnetic btn-slide inline-flex items-center gap-2 px-6 py-3 rounded-full bg-champagne text-obsidian font-bold text-sm shadow-[0_0_40px_rgba(201,168,76,0.25)] self-start md:self-auto shrink-0"
                    >
                        <span className="slide-bg rounded-full" />
                        <span className="relative z-10">Watch Video →</span>
                    </button>
                </div>

                {/* ── Main Card ── */}
                <div
                    ref={cardRef}
                    className="fv-card relative w-full rounded-3xl overflow-hidden cursor-pointer group"
                    style={{
                        aspectRatio: '16 / 9',
                        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${hovered ? 'scale(1.015)' : 'scale(1)'}`,
                        transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease',
                        boxShadow: hovered
                            ? '0 40px 100px rgba(201,168,76,0.2), 0 0 0 1px rgba(201,168,76,0.15)'
                            : '0 20px 60px rgba(0,0,0,0.5)',
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setLightboxOpen(true)}
                    role="button"
                    aria-label="Play featured video"
                >
                    {/* Thumbnail */}
                    <img
                        src={THUMBNAIL}
                        alt={VIDEO_TITLE}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                            transform: hovered ? 'scale(1.04)' : 'scale(1)',
                            transition: 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
                        }}
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-transparent" />

                    {/* Scan-line on hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
                        }}
                    />

                    {/* Champagne corner accent */}
                    <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian/70 border border-champagne/25 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne pulse-dot" />
                        <span className="font-mono text-[9px] text-champagne uppercase tracking-widest">Featured</span>
                    </div>

                    {/* Floating duration label */}
                    <div
                        className="fv-float-label absolute top-5 left-5 px-3 py-1.5 rounded-full bg-obsidian/60 border border-ivory/10 backdrop-blur-sm"
                    >
                        <span className="font-mono text-[9px] text-ivory/50 tracking-widest">YouTube</span>
                    </div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative fv-play-icon">
                            {/* Outer pulse ring */}
                            <div
                                className="fv-play-ring absolute inset-0 rounded-full border-2 border-champagne/50"
                                style={{ transform: 'scale(1)', opacity: 0.6 }}
                            />
                            {/* Button circle */}
                            <div
                                className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-2 border-champagne/60 backdrop-blur-md"
                                style={{
                                    background: 'rgba(201,168,76,0.15)',
                                    boxShadow: '0 0 50px rgba(201,168,76,0.3), inset 0 0 30px rgba(201,168,76,0.05)',
                                    transition: 'all 0.3s ease',
                                    ...(hovered && {
                                        background: 'rgba(201,168,76,0.3)',
                                        boxShadow: '0 0 80px rgba(201,168,76,0.5), inset 0 0 30px rgba(201,168,76,0.1)',
                                    }),
                                }}
                            >
                                {/* Play triangle */}
                                <div
                                    style={{
                                        width: 0,
                                        height: 0,
                                        borderStyle: 'solid',
                                        borderWidth: '11px 0 11px 20px',
                                        borderColor: 'transparent transparent transparent #C9A84C',
                                        marginLeft: '4px',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <p className="font-mono text-[10px] text-champagne uppercase tracking-widest mb-2">
                            Motion · Development
                        </p>
                        <h3 className="font-sans font-black text-xl md:text-2xl text-ivory leading-tight">
                            {VIDEO_TITLE}
                        </h3>
                    </div>
                </div>

                {/* ── Bottom strip ── */}
                <div className="fv-strip mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        {VIDEO_TAGS.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-full border border-ivory/10 font-mono text-[10px] text-ivory/40 uppercase tracking-widest hover:border-champagne/30 hover:text-champagne/70 transition-colors duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button
                        onClick={() => setLightboxOpen(true)}
                        className="font-mono text-xs text-ivory/30 hover:text-champagne transition-colors duration-300 flex items-center gap-2"
                    >
                        <span>Open on YouTube</span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* ── Lightbox Modal ── */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ backdropFilter: 'blur(16px)', background: 'rgba(10,9,8,0.92)' }}
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-ivory/15 flex items-center justify-center text-ivory/60 hover:text-ivory hover:border-ivory/40 transition-all duration-300"
                        onClick={() => setLightboxOpen(false)}
                        aria-label="Close video"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>

                    {/* ESC hint */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2">
                        <span className="font-mono text-[10px] text-ivory/25 uppercase tracking-widest">Press Esc to close</span>
                    </div>

                    {/* iFrame wrapper */}
                    <div
                        className="relative w-full max-w-5xl mx-6 rounded-2xl overflow-hidden"
                        style={{
                            aspectRatio: '16/9',
                            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.1)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white`}
                            title={VIDEO_TITLE}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            style={{ border: 'none' }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
