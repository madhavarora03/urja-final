/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(rgba(4, 9, 30, 0.9), rgba(4, 9, 30, 0.1)), url("/src/assets/hero.jpeg")',
      },
    },
  },
  plugins: [],
};
