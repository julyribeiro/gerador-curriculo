// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-400": "rgb(202, 102, 102)",
        "red-500": "rgb(187, 68, 68)",
        "red-600": "rgb(172, 34, 34)",
        "blue-500": "rgb(0, 102, 204)",
        "blue-600": "rgb(0, 77, 153)",
        "blue-700": "rgb(0, 51, 102)",
        "gray-50": "rgb(250, 250, 250)",
        "gray-100": "rgb(245, 245, 245)",
        "gray-200": "rgb(238, 238, 238)",
        "gray-300": "rgb(221, 221, 221)",
        "gray-400": "rgb(170, 170, 170)",
        "gray-500": "rgb(136, 136, 136)",
        "gray-600": "rgb(102, 102, 102)",
        "gray-700": "rgb(68, 68, 68)",
        "gray-800": "rgb(51, 51, 51)",
        "gray-900": "rgb(34, 34, 34)",
        "white": "#fff", 
      }
    },
  },
  plugins: [],
}