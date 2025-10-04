/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cor de fundo neutra 'sand' exposta na raiz para permitir classes como bg-sand, from-sand, via-sand, etc.
        sand: '#f5efe6',
        brand: {
          primary: '#f97316', // laranja caloroso
          primaryDark: '#ea580c',
          accent: '#16a34a', // verde de confiança / natureza
          sand: '#f5efe6'
        }
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 4px 14px -2px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
};
