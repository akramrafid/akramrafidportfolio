import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Terms({ onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        gsap.fromTo('.terms-overlay', { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
        gsap.fromTo('.terms-panel', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 })

        const handleKey = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handleKey)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKey)
        }
    }, [onClose])

    const close = () => {
        gsap.to('.terms-overlay', { opacity: 0, duration: 0.25, onComplete: onClose })
    }

    const sections = [
        {
            title: '1. Acceptance of Terms',
            content: `By accessing and using this website (akramrafid.com), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.`
        },
        {
            title: '2. Intellectual Property',
            content: `All content on this website — including but not limited to text, graphics, logos, images, animations, and code — is the intellectual property of Akram Rafid and is protected under applicable copyright laws. You may not reproduce, distribute, or use any content without prior written permission.`
        },
        {
            title: '3. Permitted Use',
            content: `This website is provided for informational and portfolio purposes only. You may browse and view the content for personal, non-commercial use. Any other use, including reproduction or modification of the content, is strictly prohibited without express written consent.`
        },
        {
            title: '4. Disclaimer of Warranties',
            content: `This website is provided "as is" without any warranties of any kind, expressed or implied. Akram Rafid makes no representations or warranties regarding the accuracy, completeness, or suitability of the information presented.`
        },
        {
            title: '5. Limitation of Liability',
            content: `To the fullest extent permitted by law, Akram Rafid shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content.`
        },
        {
            title: '6. External Links',
            content: `This website may contain links to external websites. These links are provided for convenience only. Akram Rafid does not endorse or accept responsibility for the content, privacy practices, or availability of any third-party websites.`
        },
        {
            title: '7. Project & Work Showcase',
            content: `Projects and case studies displayed on this portfolio represent original work or work completed on behalf of clients. Any sensitive client information has been removed or anonymised. Logos or brand assets appearing in work samples remain the property of their respective owners.`
        },
        {
            title: '8. Modifications',
            content: `Akram Rafid reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the new terms.`
        },
        {
            title: '9. Governing Law',
            content: `These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the relevant courts.`
        },
        {
            title: '10. Contact',
            content: `For any questions about these Terms of Use, please contact: akramrafid123@gmail.com`
        },
    ]

    return (
        <div
            className="terms-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: 'rgba(6,6,6,0.88)', backdropFilter: 'blur(12px)' }}
            onClick={close}
        >
            <div
                className="terms-panel relative w-full max-w-3xl max-h-[88vh] overflow-hidden rounded-2xl border border-ivory/10 flex flex-col"
                style={{ background: 'linear-gradient(160deg, #0f0f0f 0%, #0a0a0a 100%)' }}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between p-8 pb-6 border-b border-ivory/8">
                    <div>
                        <p className="font-mono text-[10px] text-champagne uppercase tracking-widest mb-2">Legal Document</p>
                        <h2 className="font-sans font-black text-2xl md:text-3xl text-ivory">Terms of Use</h2>
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
                <div className="overflow-y-auto flex-1 p-8 space-y-8"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(212,175,85,0.2) transparent' }}>
                    <p className="font-sans text-sm text-ivory/50 leading-relaxed">
                        Please read these Terms of Use carefully before using this website operated by <span className="text-ivory">Akram Rafid</span>. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.
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
