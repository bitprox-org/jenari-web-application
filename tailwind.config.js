/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"dm-sans"', "sans-serif"],
        nunito: ['"nunito-sans"', "sans-serif"],
      },
      colors: {
        "header-bg": "#1A1A1A",
        "primary-bg": "#0D8C42",
        "secondary-bg": "#DA7656",
      },
    },
  },
  plugins: [],
};
