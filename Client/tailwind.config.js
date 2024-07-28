/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx}",
    "./src/components/**/*.{vue,js,ts,tsx}",
    "./src/views/**/*.{vue,js,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', 
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

