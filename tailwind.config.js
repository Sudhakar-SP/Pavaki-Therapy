/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        golden: '#D4AF37',
        'deep-orange': '#F59E0B',
        cream: '#FAF7F2',
        'dark-gray': '#2D2D2D',
        'soft-gray': '#6B7280',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0, 0, 0, 0.06)',
        card: '0 8px 32px rgba(212, 175, 55, 0.12)',
        elevated: '0 12px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-golden': 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(45,45,45,0.9) 0%, rgba(45,45,45,0.7) 100%)',
      },
    },
  },
  plugins: [],
}
