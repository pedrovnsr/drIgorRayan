/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        gold: {
          50:  '#fdf9f0',
          100: '#f9f0d8',
          200: '#f2dfa5',
          300: '#e8c96b',
          400: '#d4a843',
          500: '#b8892a',
          600: '#9a6e1e',
          700: '#7c5518',
          800: '#624215',
          900: '#4e3412',
        },
        dark: {
          50:  '#f5f5f3',
          100: '#e8e7e3',
          200: '#d3d0c8',
          300: '#b5b0a4',
          400: '#938d7e',
          500: '#787264',
          600: '#645e52',
          700: '#524d44',
          800: '#46423b',
          900: '#3d3933',
          950: '#1a1815',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
