import { useEffect, useRef } from 'react'

export default function Contact() {
    const sectionRef = useRef(null)

    useEffect(() => {
        import('gsap').then(({ gsap }) => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger)
                const ctx = gsap.context(() => {
                    gsap.fromTo(
                        '.contact-elem',
                        { y: 50, opacity: 0 },
                        {
                            y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.08,
                            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
                        }
                    )
                }, sectionRef)
                return () => ctx.revert()
            })
        })
    }, [])

    return (
        <section id="contact" ref={sectionRef} className="section-pad px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="contact-elem font-mono text-[10px] text-champagne uppercase tracking-widest block mb-4">Get In Touch</span>
                    <h2 className="contact-elem font-sans font-black text-[clamp(2.2rem,6vw,5rem)] leading-tight tracking-tight">
                        Let's build something<br />
                        <em className="font-serif font-normal italic text-champagne">remarkable.</em>
                    </h2>
                    <p className="contact-elem mt-5 font-sans text-base text-ivory/40 max-w-lg mx-auto leading-relaxed">
                        Have a project in mind? I'd love to hear it. Drop a message and let's start a conversation.
                    </p>
                </div>

                {/* Email CTA */}
                <div className="contact-elem text-center mb-16">
                    <a
                        href="mailto:akramrafid123@gmail.com"
                        className="group inline-block font-sans font-black text-[clamp(1.2rem,3.5vw,2.5rem)] text-ivory tracking-tight relative"
                    >
                        akramrafid123@gmail.com
                        <span className="block h-px bg-champagne scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-1" />
                    </a>
                </div>

                {/* Three-option grid */}
                <div className="contact-elem grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        {
                            label: 'Essential',
                            price: 'From $300',
                            desc: 'Landing page or portfolio. Clean, fast, and polished.',
                            features: ['1 Page', 'Mobile Responsive', 'GSAP Animations', '2 Revisions'],
                            accent: false,
                        },
                        {
                            label: 'Performance',
                            price: 'From $1,000',
                            desc: 'Full marketing site or SaaS product. Production-ready.',
                            features: ['Up to 8 Pages', 'Full-Stack', 'Custom Animations', 'Unlimited Revisions'],
                            accent: true,
                        },
                        {
                            label: 'Enterprise',
                            price: 'Custom',
                            desc: 'Complex builds, design systems, or long-term retainers.',
                            features: ['Unlimited Scope', 'Team Collaboration', 'Ongoing Support', 'Priority Access'],
                            accent: false,
                        },
                    ].map(({ label, price, desc, features, accent }) => (
                        <div
                            key={label}
                            className={`${accent ? 'col-span-2 md:col-span-1' : ''} rounded-4xl p-7 flex flex-col gap-5 border transition-all duration-300 hover:scale-[1.02] ${accent
                                ? 'bg-champagne border-champagne shadow-[0_0_60px_rgba(201,168,76,0.2)]'
                                : 'glass-card hover:border-champagne/25'
                                }`}
                        >
                            <div>
                                <span className={`font-mono text-[10px] uppercase tracking-widest ${accent ? 'text-obsidian/60' : 'text-champagne'}`}>
                                    {label}
                                </span>
                                <p className={`mt-2 font-sans font-black text-2xl tracking-tight ${accent ? 'text-obsidian' : 'text-ivory'}`}>{price}</p>
                                <p className={`mt-1.5 text-sm leading-relaxed ${accent ? 'text-obsidian/70' : 'text-ivory/40'}`}>{desc}</p>
                            </div>
                            <ul className="space-y-2.5 flex-1">
                                {features.map(f => (
                                    <li key={f} className={`flex items-center gap-2.5 text-sm font-medium ${accent ? 'text-obsidian' : 'text-ivory/60'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent ? 'bg-obsidian' : 'bg-champagne'}`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="mailto:hello.akramrafid@gmail.com"
                                className={`btn-magnetic btn-slide inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold ${accent
                                    ? 'bg-obsidian text-champagne'
                                    : 'border border-ivory/15 text-ivory hover:border-champagne/40'
                                    }`}
                            >
                                <span className="slide-bg rounded-full" />
                                <span className="relative z-10">Get Started ↗</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Socials */}
                <div className="contact-elem mt-14 flex items-center justify-center gap-8 border-t border-ivory/6 pt-10">
                    {[
                        { label: 'GitHub', href: 'https://github.com/akramrafid' },
                        { label: 'Instagram', href: 'https://www.instagram.com/akraam.io/' },
                        { label: 'Twitter / X', href: 'https://x.com/akramrafidrahat' },
                        { label: 'Facebook', href: 'https://www.facebook.com/akramrafidrahat/' },
                    ].map(({ label, href }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-ivory/30 hover:text-champagne link-lift transition-colors duration-200">
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
