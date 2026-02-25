import { useEffect, useRef } from 'react'

const services = [
    {
        step: '01',
        title: 'Web & App Development',
        subtitle: 'From concept to deployment',
        color: 'emerald',
        icon: '⚡',
        desc: 'Full-stack web applications built with cutting-edge tech. Whether it\'s a blazing-fast SaaS product, a dynamic marketing site, or a React-powered platform — I architect, build, and deploy end-to-end.',
        deliverables: ['React / Next.js Apps', 'API Integration', 'Authentication Systems', 'Performance Optimization', 'Vercel / Cloud Deployment'],
        duration: '2 – 6 Weeks',
        tag: 'Development',
    },
    {
        step: '02',
        title: 'E-Commerce & CMS',
        subtitle: 'Sell smarter, manage easier',
        color: 'orange',
        icon: '🛒',
        desc: 'Custom WordPress and WooCommerce stores built for conversions — clean product pages, fast checkout flows, and SEO-optimised architecture. From small boutiques to official brand stores like Molten BD.',
        deliverables: ['WooCommerce Setup', 'Custom WordPress Themes', 'Product Catalogue', 'Payment Gateway', 'SEO & Analytics'],
        duration: '1 – 4 Weeks',
        tag: 'CMS / E-Commerce',
    },
    {
        step: '03',
        title: 'AI & ML Integration',
        subtitle: 'Intelligent features, real-world impact',
        color: 'violet',
        icon: '🤖',
        desc: 'Bring intelligence to your product — image recognition, disease detection, recommendation engines, and data-driven features. Built with Python-based ML pipelines and integrated into modern web frontends.',
        deliverables: ['Image Recognition', 'ML Model Integration', 'Data Pipelines', 'AI-Powered APIs', 'Python / TensorFlow'],
        duration: '3 – 8 Weeks',
        tag: 'AI / ML',
    },
    {
        step: '04',
        title: 'Mobile App Development',
        subtitle: 'Cross-platform, native-quality',
        color: 'sky',
        icon: '📱',
        desc: 'Beautiful, high-performance mobile apps using Flutter — one codebase for iOS and Android. From auth and dashboards to custom UI systems and Firebase backend integration.',
        deliverables: ['Flutter / Dart', 'Cross-Platform iOS & Android', 'Firebase Backend', 'Custom UI Components', 'App Store Ready'],
        duration: '4 – 10 Weeks',
        tag: 'Mobile',
    },
    {
        step: '05',
        title: 'Video Editing & Motion Graphics',
        subtitle: 'Visual content that converts',
        color: 'rose',
        icon: '🎬',
        desc: '2+ years producing professional video content for global publishers and brands. From motion graphics and promotional reels to educational content and cinematic storytelling — with broadcast-quality results.',
        deliverables: ['Adobe Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Promotional Reels'],
        duration: '3 – 10 Days',
        tag: 'Creative',
    },
    {
        step: '06',
        title: 'UI/UX Design & Branding',
        subtitle: 'Design systems that scale',
        color: 'champagne',
        icon: '✦',
        desc: 'Pixel-perfect design systems built in Figma — component libraries, brand identities, and interactive prototypes that developers love to implement. Every detail considered for user delight.',
        deliverables: ['Figma Design Systems', 'Brand Identity', 'Wireframes & Prototypes', 'Component Libraries', 'Design Handoff'],
        duration: '1 – 3 Weeks',
        tag: 'Design',
    },
]

const colorMap = {
    emerald: {
        dot: 'bg-emerald-400', text: 'text-emerald-400', border: 'border-emerald-500/25',
        glow: 'bg-emerald-500/8', tag: 'bg-emerald-500/12 border-emerald-500/25 text-emerald-400',
        num: 'text-emerald-500/20', line: 'bg-emerald-500/30',
    },
    orange: {
        dot: 'bg-orange-400', text: 'text-orange-400', border: 'border-orange-500/25',
        glow: 'bg-orange-500/8', tag: 'bg-orange-500/12 border-orange-500/25 text-orange-400',
        num: 'text-orange-500/20', line: 'bg-orange-500/30',
    },
    violet: {
        dot: 'bg-violet-400', text: 'text-violet-400', border: 'border-violet-500/25',
        glow: 'bg-violet-500/8', tag: 'bg-violet-500/12 border-violet-500/25 text-violet-400',
        num: 'text-violet-500/20', line: 'bg-violet-500/30',
    },
    sky: {
        dot: 'bg-sky-400', text: 'text-sky-400', border: 'border-sky-500/25',
        glow: 'bg-sky-500/8', tag: 'bg-sky-500/12 border-sky-500/25 text-sky-400',
        num: 'text-sky-500/20', line: 'bg-sky-500/30',
    },
    rose: {
        dot: 'bg-rose-400', text: 'text-rose-400', border: 'border-rose-500/25',
        glow: 'bg-rose-500/8', tag: 'bg-rose-500/12 border-rose-500/25 text-rose-400',
        num: 'text-rose-500/20', line: 'bg-rose-500/30',
    },
    champagne: {
        dot: 'bg-champagne', text: 'text-champagne', border: 'border-champagne/25',
        glow: 'bg-champagne/8', tag: 'bg-champagne/12 border-champagne/25 text-champagne',
        num: 'text-champagne/20', line: 'bg-champagne/30',
    },
}

export default function Services() {
    const sectionRef = useRef(null)

    useEffect(() => {
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {

                    // Header sweep in
                    gsap.fromTo('.svc-header',
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' }
                        }
                    )

                    // Roadmap connector line draw
                    gsap.fromTo('.svc-connector',
                        { scaleY: 0 },
                        {
                            scaleY: 1, duration: 2, ease: 'power2.inOut',
                            scrollTrigger: { trigger: '.svc-list', start: 'top 80%', end: 'bottom 20%', scrub: 1 }
                        }
                    )

                    // Each service row alternate slide
                    gsap.utils.toArray('.svc-row').forEach((row, i) => {
                        const fromX = i % 2 === 0 ? -50 : 50
                        gsap.fromTo(row,
                            { x: fromX, opacity: 0, scale: 0.97 },
                            {
                                x: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
                                scrollTrigger: { trigger: row, start: 'top 85%' }
                            }
                        )
                    })

                    // Step number parallax float
                    gsap.utils.toArray('.svc-step-num').forEach((el) => {
                        gsap.to(el, {
                            y: -20,
                            ease: 'none',
                            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
                        })
                    })

                    // Deliverable tags pop in
                    gsap.utils.toArray('.svc-tag').forEach((tag, i) => {
                        gsap.fromTo(tag,
                            { scale: 0.8, opacity: 0 },
                            {
                                scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.4)', delay: i * 0.04,
                                scrollTrigger: { trigger: tag, start: 'top 92%' }
                            }
                        )
                    })

                    // Bottom CTA
                    gsap.fromTo('.svc-cta',
                        { y: 40, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                            scrollTrigger: { trigger: '.svc-cta', start: 'top 90%' }
                        }
                    )

                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    return (
        <section id="services" ref={sectionRef} className="section-pad px-6 md:px-16 max-w-7xl mx-auto">

            {/* ── Header ── */}
            <div className="svc-header mb-20">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">What I Do</span>
                        <h2 className="mt-3 font-sans font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight">
                            Services &amp;<br />
                            <em className="font-serif font-normal text-champagne not-italic">capabilities.</em>
                        </h2>
                        <p className="mt-4 font-sans text-sm text-ivory/35 max-w-lg leading-relaxed">
                            A guided roadmap of everything I bring to the table from ideation and design to development, AI integration, and launch.
                        </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="font-mono text-[10px] text-ivory/20 uppercase tracking-widest">12 Services</span>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ivory/8 bg-ivory/3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                            <span className="font-mono text-[10px] text-ivory/40 uppercase tracking-widest">Available for work</span>
                        </div>
                    </div>
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-champagne/40 via-champagne/10 to-transparent" />
            </div>

            {/* ── Roadmap list ── */}
            <div className="svc-list relative">

                {/* Vertical connector line */}
                <div className="absolute left-[22px] md:left-[38px] top-4 bottom-4 w-px bg-ivory/6 hidden md:block">
                    <div className="svc-connector absolute inset-0 bg-gradient-to-b from-champagne/50 via-champagne/20 to-transparent origin-top" />
                </div>

                <div className="grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-6">
                    {services.map((svc, i) => {
                        const c = colorMap[svc.color]
                        return (
                            <div key={svc.step} className="svc-row group relative rounded-3xl md:flex md:flex-row border border-ivory/8 md:border-0 md:rounded-none bg-gradient-to-br from-slate/30 via-obsidian to-obsidian md:bg-none overflow-hidden">

                                {/* Step bubble — desktop only */}
                                <div className="relative flex-shrink-0 items-start pt-6 md:pt-7 hidden md:flex">
                                    <div className={`relative z-10 w-10 h-10 md:w-[72px] md:h-[72px] rounded-2xl md:rounded-3xl border ${c.border} ${c.glow} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-lg md:text-2xl">{svc.icon}</span>
                                    </div>
                                </div>

                                {/* Card */}
                                <div className={`flex-1 md:rounded-3xl md:border md:border-ivory/8 group-hover:${c.border} md:bg-gradient-to-br from-slate/30 via-obsidian to-obsidian p-4 md:p-8 transition-all duration-500 relative overflow-hidden`}>

                                    {/* Big step number watermark */}
                                    <span className={`svc-step-num absolute -top-4 right-6 font-sans font-black text-[6rem] md:text-[9rem] leading-none ${c.num} select-none pointer-events-none`}>
                                        {svc.step}
                                    </span>

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">

                                        {/* Left: content */}
                                        <div className="flex-1">
                                            {/* Mobile: icon + tag */}
                                            <div className="flex items-center gap-2 mb-2 md:hidden">
                                                <span className="text-xl">{svc.icon}</span>
                                                <span className={`font-mono text-[9px] ${c.text} uppercase tracking-widest`}>{svc.tag}</span>
                                            </div>
                                            {/* Desktop: dot + tag + duration */}
                                            <div className="hidden md:flex flex-wrap items-center gap-3 mb-3">
                                                <span className={`w-1.5 h-1.5 rounded-full ${c.dot} pulse-dot`} />
                                                <span className={`font-mono text-[10px] ${c.text} uppercase tracking-widest`}>{svc.tag}</span>
                                                <span className="font-mono text-[10px] text-ivory/20 uppercase tracking-widest">· {svc.duration}</span>
                                            </div>
                                            <h3 className="font-sans font-black text-sm md:text-2xl text-ivory leading-tight">{svc.title}</h3>
                                            <p className={`font-serif italic text-[10px] md:text-sm ${c.text} mt-0.5 mb-2 md:mb-3`}>{svc.subtitle}</p>
                                            <p className="hidden md:block font-sans text-sm text-ivory/40 leading-relaxed max-w-xl">{svc.desc}</p>
                                        </div>

                                        {/* Right: deliverables — desktop only */}
                                        <div className="md:w-52 flex-shrink-0 hidden md:block">
                                            <p className="font-mono text-[9px] text-ivory/25 uppercase tracking-widest mb-3">Deliverables</p>
                                            <ul className="flex flex-col gap-2">
                                                {svc.deliverables.map(d => (
                                                    <li key={d} className="flex items-center gap-2">
                                                        <span className={`w-1 h-1 rounded-full ${c.dot} flex-shrink-0`} />
                                                        <span className={`svc-tag font-mono text-[10px] ${c.text} uppercase tracking-widest`}>{d}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* ── Bottom CTA ── */}
            <div className="svc-cta mt-20 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-4xl border border-champagne/15 bg-gradient-to-br from-champagne/5 via-obsidian to-obsidian">
                <div>
                    <p className="font-mono text-[10px] text-champagne uppercase tracking-widest mb-2">Ready to start?</p>
                    <h3 className="font-sans font-black text-2xl md:text-3xl text-ivory">Let's build something <em className="font-serif font-normal text-champagne not-italic">extraordinary.</em></h3>
                    <p className="mt-2 font-sans text-sm text-ivory/35">Tell me about your project — I'll get back within 24 hours.</p>
                </div>
                <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-magnetic btn-slide flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-champagne text-obsidian font-bold text-sm shadow-[0_0_40px_rgba(201,168,76,0.25)] hover:shadow-[0_0_60px_rgba(201,168,76,0.4)] transition-shadow duration-300"
                >
                    <span className="slide-bg rounded-full bg-obsidian/10" />
                    <span className="relative z-10">Start a Project →</span>
                </button>
            </div>
        </section>
    )
}
