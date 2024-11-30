/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Aktifkan mode gelap dengan class
  theme: {
    extend: {
      colors: {
        lightmode: '#FFFFFF', // Warna latar untuk light mode
        darkmode: '#090D1F', // Warna latar untuk dark mode
        fonttext: '#1A1A1A', // Warna teks untuk light mode
        hamburgeropen: '#121212', // Warna untuk hamburger ketika dibuka
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // Font keluarga
    },
  },
  plugins: [],
};
