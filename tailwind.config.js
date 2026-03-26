/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-1': '#0ea5a4',
        'brand-2': '#7c3aed',
        'brand-3': '#06b6d4'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg,#7c3aed 0%, #0ea5a4 50%, #06b6d4 100%)'
      }
    }
  },
  plugins: []
}
