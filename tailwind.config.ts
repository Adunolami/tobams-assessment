/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#571244',
        secondary: '#EF4353',
        'text-dark': '#151515',
        'text-gray': '#696969',
        'white': '#FFFFFF',
        'lms-bg': '#5712441A',
        'management-bg': '#2C0922',
        'management-card': '#8F6182',
        'footer-bg': '#0A0A0A',
        'footer-text': '#F8F8F8',
        'card-bg': '#FFFFFF4D',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}