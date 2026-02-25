export default function Footer({ onPrivacyClick, onTermsClick }) {
    const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <footer className="relative bg-obsidian border-t border-ivory/6 rounded-t-6xl overflow-hidden">
            {/* Subtle gradient top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="font-sans font-black text-2xl text-ivory mb-3">
                            AR<span className="text-champagne">.</span>
                        </div>
                        <p className="font-sans text-sm text-ivory/35 leading-relaxed max-w-xs">
                            Creative Web Developer building immersive, high-performance digital experiences with modern technologies.
                        </p>
                        {/* Status indicator */}
                        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ivory/8 bg-ivory/3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                            <span className="font-mono text-[10px] text-ivory/40 uppercase tracking-widest">System Operational</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="font-mono text-[10px] text-champagne uppercase tracking-widest mb-5">Navigation</p>
                        <ul className="space-y-3">
                            {[['Home', '#home'], ['Work', '#services'], ['About', '#resume'], ['Services', '#services'], ['Contact', '#contact']].map(([label, href]) => (
                                <li key={label}>
                                    <button
                                        onClick={() => scrollTo(href)}
                                        className="font-sans text-sm text-ivory/40 hover:text-ivory link-lift"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="font-mono text-[10px] text-champagne uppercase tracking-widest mb-5">Connect</p>
                        <ul className="space-y-3">
                            {[
                                { label: 'GitHub', href: 'https://github.com/akramrafid' },
                                { label: 'Instagram', href: 'https://www.instagram.com/akraam.io/' },
                                { label: 'Twitter / X', href: 'https://x.com/akramrafidrahat' },
                                { label: 'Facebook', href: 'https://www.facebook.com/akramrafidrahat/' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-ivory/40 hover:text-ivory link-lift block">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-ivory/6">
                    <p className="font-mono text-[11px] text-ivory/20">
                        © 2026 Akram Rafid. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <button onClick={onPrivacyClick} className="font-mono text-[11px] text-ivory/20 hover:text-ivory/50 link-lift">Privacy Policy</button>
                        <button onClick={onTermsClick} className="font-mono text-[11px] text-ivory/20 hover:text-ivory/50 link-lift">Terms</button>
                        <button
                            onClick={() => scrollTo('#home')}
                            className="font-mono text-[11px] text-champagne hover:text-champagne/70 link-lift"
                        >
                            Back to top ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
