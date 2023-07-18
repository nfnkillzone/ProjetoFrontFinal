/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx",
  "./index.html"],
  theme: {
    extend: {
      colors: {
        black: {
          400: '#212121'
        }
      }
    },
  },
  plugins: [],
}
