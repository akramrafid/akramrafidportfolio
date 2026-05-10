import React from 'react'

export default function WhatsAppWidget() {
    return (
        <a
            href="https://wa.me/8801641414949?text=Hello%20Akram!%20I'm%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.337a9.993 9.993 0 004.779 1.216h.004c5.502 0 9.985-4.48 9.985-9.985S17.518 2 12.012 2zm0 16.945c-1.466 0-2.905-.395-4.161-1.14l-.299-.178-3.097.79.824-3.023-.195-.31a8.318 8.318 0 01-1.272-4.44c0-4.606 3.75-8.358 8.359-8.358 2.233 0 4.331.87 5.908 2.45A8.342 8.342 0 0120.37 11.94c0 4.604-3.75 8.357-8.358 8.361zm4.582-6.262c-.251-.126-1.486-.734-1.716-.818-.231-.084-.4-.126-.569.126-.169.252-.647.818-.793.986-.146.168-.293.189-.544.063-.251-.126-1.06-.391-2.02-1.246-.747-.665-1.252-1.488-1.4-1.74-.148-.252-.016-.388.11-.513.113-.113.251-.294.377-.441.126-.147.168-.252.251-.42.084-.168.042-.315-.021-.441-.063-.126-.569-1.372-.779-1.877-.204-.492-.41-.425-.568-.433-.146-.007-.314-.007-.482-.007-.168 0-.44.063-.671.315s-.879.86-.879 2.096c0 1.237.9 2.433 1.026 2.601.126.168 1.773 2.705 4.296 3.793 2.146.924 2.502.734 2.963.692.46-.042 1.486-.608 1.696-1.195.21-.587.21-1.09.147-1.195-.063-.105-.23-.168-.481-.294z" />
            </svg>
            <span className="absolute right-full mr-4 bg-obsidian border border-ivory/10 text-ivory text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                Chat on WhatsApp
            </span>
            
            {/* Ping animation behind */}
            <span className="absolute -z-10 w-full h-full bg-[#25D366] rounded-full animate-ping opacity-40"></span>
        </a>
    )
}
