import { useEffect, useRef } from 'react'

const experience = [
    {
        role: 'Video Editor',
        company: 'Springer Publishing Company',
        period: '2023 – Present',
        duration: '2+ Years',
        type: 'Professional',
        color: 'sky',
        desc: 'Producing high-quality video content for a leading global publisher of healthcare books, textbooks, and medical journals. Creating motion graphics, promotional content, and educational video materials for academic professionals and institutions worldwide.',
        skills: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Color Grading'],
    },
    {
        role: 'Full-Stack Web Developer',
        company: 'HarvestGuard — AgriTech Platform',
        period: '2025',
        duration: 'Project',
        type: 'Development',
        color: 'emerald',
        desc: "Built an AI-powered crop protection platform for Bangladesh's farmers — featuring real-time disease detection via image scanning, live weather alerts, and an interactive risk map to tackle the country's 30% post-harvest loss problem.",
        skills: ['React', 'Vite', 'Tailwind CSS', 'AI/ML', 'Weather API'],
    },
    {
        role: 'Backend Developer & Auth Engineer',
        company: 'Study Hub — EdTech Platform',
        period: '2025',
        duration: 'Project',
        type: 'Development',
        color: 'violet',
        desc: 'Led backend integration, authentication system, and data fetching for a community-driven developer roadmap platform. Built filtering logic, form handling, and REST API connections for learning resource aggregation.',
        skills: ['React', 'Next.js', 'Authentication', 'Data Fetching', 'Vercel'],
    },
    {
        role: 'WordPress Developer',
        company: 'Molten BD — Sports E-Commerce',
        period: '2024 – 2025',
        duration: 'Project',
        type: 'Development',
        color: 'orange',
        desc: 'Developed the official Bangladesh e-commerce platform for Molten Corporation — a global sports brand and official ball supplier to FIFA and FIBA — including WooCommerce setup, custom theming, and SEO optimisation.',
        skills: ['WordPress', 'WooCommerce', 'PHP', 'Custom CSS', 'SEO'],
    },
]


const education = [
    {
        degree: 'B.Sc in Computer Science & Engineering',
        institution: 'East Delta University',
        period: '2023 – Present',
        detail: 'Hult Prize National Champion · PolyJute Team',
    },
]

const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'GSAP', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Supabase', 'REST APIs', 'Authentication', 'Firebase'] },
    { category: 'CMS & E-Commerce', items: ['WordPress', 'WooCommerce', 'Webflow', 'Shopify', 'Elementor'] },
    { category: 'Creative Tools', items: ['After Effects', 'Premiere Pro', 'Motion Graphics', 'Figma', 'Canva'] },
    { category: 'Mobile & AI', items: ['Flutter', 'Dart', 'Machine Learning', 'Deep Learning', 'Python'] },
    { category: 'DevOps & Tools', items: ['Git', 'Vercel', 'VS Code', 'Three.js', 'Framer Motion'] },
]

const colorMap = {
    sky: { dot: 'bg-sky-400', border: 'border-sky-500/30', bg: 'bg-sky-500/10', text: 'text-sky-400', tag: 'bg-sky-500/10 border-sky-500/20 text-sky-400' },
    emerald: { dot: 'bg-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', tag: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
    violet: { dot: 'bg-violet-400', border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', tag: 'bg-violet-500/10 border-violet-500/20 text-violet-400' },
    orange: { dot: 'bg-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-400', tag: 'bg-orange-500/10 border-orange-500/20 text-orange-400' },
}

export default function Resume() {
    const sectionRef = useRef(null)

    useEffect(() => {
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {
                    // Header reveal
                    gsap.fromTo('.cv-header',
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } }
                    )
                    // Timeline entries stagger
                    gsap.fromTo('.cv-entry',
                        { x: -40, opacity: 0 },
                        {
                            x: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.14,
                            scrollTrigger: { trigger: '.cv-timeline', start: 'top 80%' }
                        }
                    )
                    // Skill groups stagger
                    gsap.fromTo('.cv-skill-group',
                        { y: 40, opacity: 0, scale: 0.97 },
                        {
                            y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1,
                            scrollTrigger: { trigger: '.cv-skills', start: 'top 82%' }
                        }
                    )
                    // Education card
                    gsap.fromTo('.cv-edu',
                        { y: 30, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                            scrollTrigger: { trigger: '.cv-edu', start: 'top 85%' }
                        }
                    )
                    // Download button pop
                    gsap.fromTo('.cv-download',
                        { scale: 0.9, opacity: 0 },
                        {
                            scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.7)',
                            scrollTrigger: { trigger: '.cv-download', start: 'top 90%' }
                        }
                    )
                    // Decorative line draw
                    gsap.fromTo('.cv-line',
                        { scaleX: 0 },
                        {
                            scaleX: 1, duration: 1.5, ease: 'power4.out',
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
                        }
                    )
                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    return (
        <section id="resume" ref={sectionRef} className="section-pad px-6 md:px-16 max-w-7xl mx-auto">

            {/* ── Header ── */}
            <div className="cv-header mb-14">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">Curriculum Vitae</span>
                        <h2 className="mt-3 font-sans font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight">
                            Experience &amp;<br />
                            <em className="font-serif font-normal text-champagne not-italic">expertise.</em>
                        </h2>
                    </div>

                    {/* Download CTA */}
                    <a
                        href="/Akram Rafid RESUME.pdf"
                        download="Akram Rafid Resume.pdf"
                        className="cv-download btn-magnetic btn-slide self-start md:self-auto group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-champagne text-obsidian font-bold text-sm hover:bg-champagne/90 transition-all duration-300 shadow-[0_0_40px_rgba(201,168,76,0.25)] hover:shadow-[0_0_60px_rgba(201,168,76,0.4)]"
                    >
                        <span className="slide-bg rounded-full bg-obsidian/10" />
                        <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="relative z-10">Download CV</span>
                    </a>
                </div>
                <div className="cv-line mt-8 h-px bg-gradient-to-r from-champagne/40 via-champagne/10 to-transparent origin-left" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                {/* ── Left: Timeline ── */}
                <div className="cv-timeline lg:col-span-3 flex flex-col gap-4">
                    <p className="font-mono text-[10px] text-ivory/30 uppercase tracking-widest mb-2">Work &amp; Projects</p>

                    <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                        {experience.map((exp) => {
                            const c = colorMap[exp.color]
                            return (
                                <div
                                    key={exp.role}
                                    className={`cv-entry group relative rounded-3xl border border-ivory/8 hover:${c.border} bg-gradient-to-br from-slate/30 via-obsidian to-obsidian p-4 md:p-6 transition-all duration-400 hover:border-opacity-100`}
                                >
                                    {/* Accent left bar */}
                                    <div className={`absolute left-0 top-6 bottom-6 w-0.5 ${c.dot} rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <div className="pl-3 md:pl-4">
                                        {/* Top row */}
                                        <div className="flex flex-wrap items-start justify-between gap-2 md:gap-3 mb-2 md:mb-3">
                                            <div>
                                                <div className="flex items-center gap-1.5 md:gap-2 mb-1">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${c.dot} pulse-dot`} />
                                                    <span className={`font-mono text-[9px] md:text-[10px] ${c.text} uppercase tracking-widest`}>{exp.type}</span>
                                                </div>
                                                <h3 className="font-sans font-bold text-xs md:text-base text-ivory leading-snug">{exp.role}</h3>
                                                <p className="font-sans text-[10px] md:text-sm text-champagne/80 mt-0.5 leading-snug">{exp.company}</p>
                                            </div>
                                            <span className="font-mono text-[9px] md:text-[10px] text-ivory/25 uppercase tracking-widest whitespace-nowrap">{exp.period}</span>
                                        </div>

                                        {/* Description — desktop only */}
                                        <p className="hidden md:block font-sans text-xs text-ivory/40 leading-relaxed mb-4">{exp.desc}</p>

                                        {/* Skill tags — full on desktop, 2 max on mobile */}
                                        <div className="hidden md:flex flex-wrap gap-1.5">
                                            {exp.skills.map(s => (
                                                <span key={s} className={`font-mono text-[9px] px-2 py-1 rounded-full border ${c.tag} uppercase tracking-widest`}>{s}</span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-1 md:hidden">
                                            {exp.skills.slice(0, 2).map(s => (
                                                <span key={s} className={`font-mono text-[8px] px-1.5 py-0.5 rounded-full border ${c.tag} uppercase tracking-widest`}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* ── Right: Education + Skills ── */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* Education */}
                    <div>
                        <p className="font-mono text-[10px] text-ivory/30 uppercase tracking-widest mb-3">Education</p>
                        {education.map(edu => (
                            <div key={edu.degree} className="cv-edu rounded-3xl border border-ivory/8 bg-gradient-to-br from-champagne/5 via-obsidian to-obsidian p-6 hover:border-champagne/20 transition-colors duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">🎓</span>
                                    <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">Academic</span>
                                </div>
                                <h3 className="font-sans font-bold text-sm text-ivory leading-snug">{edu.degree}</h3>
                                <p className="font-sans text-xs text-champagne/70 mt-1">{edu.institution}</p>
                                <p className="font-mono text-[10px] text-ivory/25 uppercase tracking-widest mt-1">{edu.period}</p>
                                <div className="mt-3 pt-3 border-t border-ivory/6">
                                    <p className="font-mono text-[10px] text-ivory/40 leading-relaxed">{edu.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skills */}
                    <div className="cv-skills">
                        <p className="font-mono text-[10px] text-ivory/30 uppercase tracking-widest mb-3">Skills &amp; Tools</p>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                            {skills.map(({ category, items }) => (
                                <div key={category} className="cv-skill-group rounded-2xl border border-ivory/6 bg-slate/20 p-4 hover:border-ivory/12 transition-colors duration-300">
                                    <p className="font-mono text-[9px] text-champagne uppercase tracking-widest mb-2.5">{category}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {items.map(skill => (
                                            <span key={skill} className="font-mono text-[9px] px-2 py-1 rounded-full bg-ivory/5 border border-ivory/8 text-ivory/50 uppercase tracking-widest hover:text-champagne hover:border-champagne/25 transition-colors duration-200 cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
