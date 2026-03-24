/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        section: "#0A0A0A",
        card: "#111111",
        accent: "#EF4444", // Racing Red
        primary: "#FFFFFF",
        secondary: "#D1D5DB", // neutral-300
        muted: "#737373", // neutral-500
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
