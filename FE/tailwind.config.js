/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        commonBlue: "#007bff",
        commonBlack: "#191B1D",
        bodyBlack: '#232527',
        inputBlack: '#111212',   
      }
    },
  },
  plugins: [],
}
