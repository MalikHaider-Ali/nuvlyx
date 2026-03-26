/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#ffffff',
        'on-surface': '#1a1a1a',
        primary: '#6750a4',
        secondary: '#625b71',
        outline: '#79747e',
        'outline-variant': '#cac4d0',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}