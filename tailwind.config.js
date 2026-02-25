/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                obsidian: '#0D0D12',
                champagne: '#C9A84C',
                ivory: '#FAF8F5',
                slate: '#2A2A35',
                'slate-light': '#3A3A48',
                'champagne-dim': 'rgba(201,168,76,0.15)',
                'champagne-glow': 'rgba(201,168,76,0.08)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '3rem',
                '6xl': '4rem',
            },
            backgroundImage: {
                'champagne-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
            },
        },
    },
    plugins: [],
}
