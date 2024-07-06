/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-custom-image': "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/images/hero.jpg')",
    },
    },
  },
  plugins: [],
}

