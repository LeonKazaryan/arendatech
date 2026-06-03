/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#F2C200',
          black: '#111111',
          white: '#FFFFFF',
          gray: '#F5F5F5',
          green: '#25D366',
        },
      },
      boxShadow: {
        glass: '0 10px 30px rgba(17, 17, 17, 0.08)',
      },
      backgroundImage: {
        'hero-sheen': 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 100%)',
      },
    },
  },
  plugins: [],
};