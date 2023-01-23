/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    primary: "#3e976b",
    secondary: "#bdefd7",
  },
  theme: {
    extend: {
      fontFamily: {
        pacifico: [`var(--font-pacifico)`],
        rubik: [`var(--font-rubik)`],
      },
    },
  },
  plugins: [],
};
