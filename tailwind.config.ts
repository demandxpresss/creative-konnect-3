import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Creative Konnect brand colors
        ck: {
          navy:     '#0D1F2E',
          deep:     '#1A3A5C',
          blue:     '#1A7FD4',
          electric: '#2AACEE',
          sky:      '#E8F4FD',
          ghost:    '#F7FAFE',
          midnight: '#060f18',
        },
        brand: {
          wa: '#25D366', // WhatsApp green
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['52px', { lineHeight: '1.0', letterSpacing: '-2px', fontWeight: '800' }],
        'display-lg': ['38px', { lineHeight: '1.05', letterSpacing: '-1px', fontWeight: '800' }],
        'display-md': ['28px', { lineHeight: '1.1', letterSpacing: '-0.5px', fontWeight: '800' }],
      },
      borderRadius: {
        'card': '10px',
        'card-lg': '12px',
      },
      boxShadow: {
        'card':  '0 2px 12px rgba(26,58,92,0.06)',
        'popup': '0 24px 64px rgba(13,31,46,0.3)',
      },
      animation: {
        'fade-in':   'fadeIn 0.4s ease-out',
        'slide-up':  'slideUp 0.4s ease-out',
        'ticker':    'ticker 30s linear infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        ticker:  { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}

export default config
