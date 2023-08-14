/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: [`var(--font-pacifico)`],
        rubik: [`var(--font-rubik)`],
      },
    },
    colors: {
      primary: "#3e976b",
      secondary: "#bdefd7",
      black: "#000000",
      seafoam: "#3DED97",
      desire: "#EA3B52",
      crimson: "#BA11OC",
      navy: "#0096FF",
      white: "#ffff",
      red: "#FF0000",
    },
  },
  plugins: [],
};
