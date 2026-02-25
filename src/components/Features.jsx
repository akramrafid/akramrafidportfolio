import { useEffect, useRef, useState } from 'react'

/* ── Card 1: Diagnostic Shuffler ── */
function ShufflerCard() {
    const items = [
        { label: 'GSAP Animation', tag: 'Motion Design', color: 'text-champagne' },
        { label: 'Scroll Experience', tag: 'Interaction', color: 'text-emerald-400' },
        { label: 'Micro-interactions', tag: 'Polish Layer', color: 'text-violet-400' },
    ]
    const [stack, setStack] = useState(items)

    useEffect(() => {
        const id = setInterval(() => {
            setStack(prev => {
                const next = [...prev]
                const last = next.pop()
                next.unshift(last)
                return next
            })
        }, 2800)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="flex-1 rounded-4xl glass-card p-7 flex flex-col gap-5 min-h-[320px]">
            <div>
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">01 — Animation Craft</span>
                <h3 className="mt-2 font-sans font-bold text-xl text-ivory">Motion-Driven Frontends</h3>
                <p className="mt-1.5 text-sm text-ivory/40 leading-relaxed">Every interface element moves with weight, purpose, and cinematic timing.</p>
            </div>
            <div className="relative flex-1" style={{ perspective: '600px' }}>
                {stack.map((item, i) => (
                    <div
                        key={item.label}
                        className="absolute inset-x-0 border border-ivory/8 bg-slate/30 rounded-2xl p-4 flex items-center justify-between"
                        style={{
                            top: `${i * 14}px`,
                            zIndex: stack.length - i,
                            opacity: 1 - i * 0.25,
                            transform: `scale(${1 - i * 0.04})`,
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        <div>
                            <span className={`font-sans font-semibold text-sm ${item.color}`}>{item.label}</span>
                            <span className="block font-mono text-[10px] text-ivory/30 mt-0.5">{item.tag}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-ivory/10 flex items-center justify-center">
                            <span className="text-xs text-ivory/40">{i + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ── Card 2: Telemetry Typewriter ── */
function TypewriterCard() {
    const messages = [
        '> Rendering pixel-perfect UI...',
        '> Validating border-radius tokens...',
        '> Component hierarchy: clean.',
        '> Performance score: 98/100 ✓',
        '> Accessibility: WCAG AA ✓',
        '> Bundle size optimized ✓',
        '> Deploying to production...',
        '> Ship it. 🚀',
    ]
    const [line, setLine] = useState(0)
    const [chars, setChars] = useState(0)
    const [log, setLog] = useState([])

    useEffect(() => {
        if (chars < messages[line].length) {
            const t = setTimeout(() => setChars(c => c + 1), 38)
            return () => clearTimeout(t)
        } else {
            const t = setTimeout(() => {
                setLog(prev => [...prev.slice(-5), messages[line]])
                setLine(l => (l + 1) % messages.length)
                setChars(0)
            }, 1000)
            return () => clearTimeout(t)
        }
    }, [chars, line])

    return (
        <div className="flex-1 rounded-4xl glass-card p-7 flex flex-col gap-5 min-h-[320px]">
            <div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-champagne pulse-dot" />
                    <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">02 — Live Feed</span>
                </div>
                <h3 className="mt-2 font-sans font-bold text-xl text-ivory">Pixel-Perfect Engineering</h3>
                <p className="mt-1.5 text-sm text-ivory/40 leading-relaxed">Every component built to spec. No drift. No shortcuts.</p>
            </div>
            <div className="flex-1 bg-obsidian/80 rounded-2xl p-4 font-mono text-xs overflow-hidden border border-ivory/5">
                {log.map((l, i) => (
                    <div key={i} className="text-ivory/25 leading-6">{l}</div>
                ))}
                <div className="text-emerald-400 leading-6">
                    {messages[line].slice(0, chars)}
                    <span className="text-champagne cursor-blink">▌</span>
                </div>
            </div>
        </div>
    )
}

/* ── Card 3: Cursor Protocol Scheduler ── */
function SchedulerCard() {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const [active, setActive] = useState(null)
    const [cursorDay, setCursorDay] = useState(null)
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        const seq = async () => {
            await delay(800)
            for (let i = 1; i <= 5; i++) {
                setCursorDay(i)
                await delay(350)
            }
            setActive(3)
            await delay(600)
            setSaved(true)
            await delay(1200)
            setActive(null)
            setCursorDay(null)
            setSaved(false)
        }
        const interval = setInterval(seq, 4000)
        seq()
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex-1 rounded-4xl glass-card p-7 flex flex-col gap-5 min-h-[320px]">
            <div>
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">03 — Full-Stack Builds</span>
                <h3 className="mt-2 font-sans font-bold text-xl text-ivory">Modern Tech Expertise</h3>
                <p className="mt-1.5 text-sm text-ivory/40 leading-relaxed">From database to deploy — Next.js, Supabase, Flutter, and beyond.</p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-7 gap-1.5">
                    {days.map((d, i) => (
                        <div
                            key={i}
                            className={`rounded-xl aspect-square flex flex-col items-center justify-center transition-all duration-300 ${active === i
                                ? 'bg-champagne text-obsidian'
                                : cursorDay === i
                                    ? 'bg-slate-light/60 text-ivory'
                                    : 'bg-slate/30 text-ivory/30'
                                }`}
                            style={{
                                transform: cursorDay === i ? 'scale(0.95)' : 'scale(1)',
                                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                            }}
                        >
                            <span className="font-mono text-[10px] font-bold">{d}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <span className="font-mono text-xs text-ivory/30">{active !== null ? `Wednesday booked` : 'Select delivery day'}</span>
                    <button
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${saved
                            ? 'bg-champagne text-obsidian scale-105'
                            : 'border border-ivory/15 text-ivory/40'
                            }`}
                    >
                        {saved ? '✓ Saved' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    )
}

const delay = (ms) => new Promise(res => setTimeout(res, ms))

/* ── Main Features Section ── */
export default function Features() {
    const sectionRef = useRef(null)

    useEffect(() => {
        // Dynamic import to avoid SSR issues
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {
                    gsap.fromTo(
                        '.feat-header',
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
                    )
                    gsap.fromTo(
                        '.feat-card',
                        { y: 60, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
                    )
                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    return (
        <section id="work" ref={sectionRef} className="section-pad px-6 md:px-16 max-w-7xl mx-auto">
            <div className="feat-header mb-14">
                <span className="font-mono text-[10px] text-champagne uppercase tracking-widest">What I Do</span>
                <h2 className="mt-3 font-sans font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight">
                    Three pillars of<br />
                    <em className="font-serif font-normal text-champagne not-italic">craft.</em>
                </h2>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-5">
                <div className="feat-card flex-1"><ShufflerCard /></div>
                <div className="feat-card flex-1"><TypewriterCard /></div>
                <div className="feat-card col-span-2 md:flex-1"><SchedulerCard /></div>
            </div>
        </section>
    )
}
