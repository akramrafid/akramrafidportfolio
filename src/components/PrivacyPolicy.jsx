import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function PrivacyPolicy({ onClose }) {
    useEffect(() => {
        // Prevent body scroll
        document.body.style.overflow = 'hidden'
        // Animate in
        gsap.fromTo('.pp-overlay', { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
        gsap.fromTo('.pp-panel', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 })

        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handleKey)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKey)
        }
    }, [onClose])

    const close = () => {
        gsap.to('.pp-overlay', { opacity: 0, duration: 0.25, onComplete: onClose })
    }

    const sections = [
        {
            title: '1. Information We Collect',
            content: `When you use the contact form on this website, we may collect your name and email address solely for the purpose of responding to your inquiry. No other personal data is collected without your explicit consent.`
        },
        {
            title: '2. How We Use Your Information',
            content: `Any information you provide is used exclusively to respond to your message. We do not sell, rent, trade, or otherwise share your personal data with third parties for marketing or any other commercial purposes.`
        },
        {
            title: '3. Cookies & Analytics',
            content: `This website may use cookies or similar tracking technologies to understand visitor behaviour and improve the user experience. You can disable cookies through your browser settings at any time without affecting your ability to use the site.`
        },
        {
            title: '4. Third-Party Services',
            content: `This site may embed content from third-party platforms (e.g. GitHub, LinkedIn). These services have their own privacy policies, and we encourage you to review them, as we have no control over their data practices.`
        },
        {
            title: '5. Data Security',
            content: `We take reasonable precautions to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`
        },
        {
            title: '6. Your Rights',
            content: `You have the right to request access to, correction of, or deletion of any personal data you have provided. To exercise these rights, please contact us at akramrafid123@gmail.com.`
        },
        {
            title: '7. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of this website after changes constitutes acceptance of the updated policy.`
        },
        {
            title: '8. Contact',
            content: `If you have any questions or concerns regarding this Privacy Policy, please reach out at akramrafid123@gmail.com.`
        },
    ]

    return (
        <div
            className="pp-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: 'rgba(6,6,6,0.88)', backdropFilter: 'blur(12px)' }}
            onClick={close}
        >
            <div
                className="pp-panel relative w-full max-w-3xl max-h-[88vh] overflow-hidden rounded-2xl border border-ivory/10 flex flex-col"
                style={{ background: 'linear-gradient(160deg, #0f0f0f 0%, #0a0a0a 100%)' }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between p-8 pb-6 border-b border-ivory/8">
                    <div>
                        <p className="font-mono text-[10px] text-champagne uppercase tracking-widest mb-2">Legal Document</p>
                        <h2 className="font-sans font-black text-2xl md:text-3xl text-ivory">Privacy Policy</h2>
                        <p className="font-mono text-[11px] text-ivory/30 mt-2">Effective: February 25, 2026</p>
                    </div>
                    <button
                        onClick={close}
                        aria-label="Close"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-ivory/10 text-ivory/40 hover:text-ivory hover:border-ivory/30 transition-all duration-200 text-lg mt-1 flex-shrink-0"
                    >
                        ✕
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="overflow-y-auto flex-1 p-8 space-y-8 scroll-smooth"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(212,175,85,0.2) transparent' }}>
                    <p className="font-sans text-sm text-ivory/50 leading-relaxed">
                        This Privacy Policy explains how <span className="text-ivory">Akram Rafid</span> ("I", "me", or "my") collects, uses, and protects any information that you provide when using this website.
                    </p>

                    {sections.map((s, i) => (
                        <div key={i} className="group">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-1 h-4 rounded-full bg-champagne/60 flex-shrink-0" />
                                <h3 className="font-sans font-bold text-base text-ivory">{s.title}</h3>
                            </div>
                            <p className="font-sans text-sm text-ivory/45 leading-relaxed pl-4">{s.content}</p>
                        </div>
                    ))}

                    <div className="pt-4 border-t border-ivory/6">
                        <p className="font-mono text-[10px] text-ivory/20 text-center">
                            © 2026 Akram Rafid · All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
