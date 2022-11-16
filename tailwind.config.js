/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'EASE-IN-OUT'
      },
      transitionDuration: {
        DEFAULT: '600ms'
      },
      keyframes: {
        fadeIn: {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      }
      },
      animation: {
        fading: 'fadeIn 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
