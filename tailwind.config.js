/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#070809',
          900: '#0B0C0E',
          800: '#14161B',
          700: '#1C1F26',
          600: '#2A2E39'
        },
        ivory: {
          DEFAULT: '#F7F4EE',
          warm: '#EFEBE1',
          muted: '#C5C0B4',
          dark: '#9E998E'
        },
        champagne: {
          DEFAULT: '#D4AF37',
          light: '#E7CB6D',
          dark: '#B08E26',
          subtle: '#38301D'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'super-wide': '0.35em',
      }
    },
  },
  plugins: [],
}
