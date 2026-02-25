import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Services from './components/Services'
import PolyJute from './components/PolyJute'
import FeaturedVideo from './components/FeaturedVideo'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import Terms from './components/Terms'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
    const [modal, setModal] = useState(null) // null | 'privacy' | 'terms'

    useEffect(() => {
        // Smooth scrolling refresh on mount
        ScrollTrigger.refresh()
        return () => ScrollTrigger.killAll()
    }, [])

    return (
        <div className="bg-obsidian text-ivory min-h-screen overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />

                {/* Marquee strip */}
                <div className="border-y border-ivory/6 py-4 bg-obsidian overflow-hidden">
                    <div
                        className="flex whitespace-nowrap"
                        style={{ animation: 'marquee 28s linear infinite', width: 'max-content' }}
                    >
                        {[...Array(2)].map((_, di) => (
                            <div key={di} className="flex items-center gap-8 pr-8">
                                {['Next.js', '✦', 'React', '✦', 'GSAP', '✦', 'Shopify', '✦', 'Webflow', '✦', 'Three.js', '✦', 'Supabase', '✦', 'TypeScript', '✦', 'Tailwind', '✦', 'Figma', '✦', 'Deep Learning', '✦', 'Machine Learning', '✦', 'Artificial Intelligence', '✦', 'Flutter App Development', '✦', 'Wordpress', '✦', 'Elementor', '✦', 'After Effects', '✦', 'Premiere Pro', '✦',].map((item, i) => (
                                    <span
                                        key={i}
                                        className={`font-mono text-xs tracking-widest ${item === '✦' ? 'text-champagne' : 'text-ivory/30'}`}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <Features />
                <Philosophy />
                <Protocol />
                <Services />
                <FeaturedVideo />
                <PolyJute />
                <Resume />
                <Contact />
            </main>
            <Footer
                onPrivacyClick={() => setModal('privacy')}
                onTermsClick={() => setModal('terms')}
            />

            {/* Legal modals */}
            {modal === 'privacy' && <PrivacyPolicy onClose={() => setModal(null)} />}
            {modal === 'terms' && <Terms onClose={() => setModal(null)} />}

            {/* Marquee keyframe */}
            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    )
}

