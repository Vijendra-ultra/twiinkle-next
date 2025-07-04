/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{tsx,ts,html}",
    "./src/miniComps/**/*.{tsx,ts,html}",
    "./src/comps/**/*.{tsx,ts,html}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: "#d81159",
        btnHoverCol: "#2a9d8f",
        lightPink: "#ffc2d1",
        darkmblack: "#212529",
        beige: "#fdf0d5",
        footerColor: "#c77dff",
        lightGrey: "#adb5bd",
        textGrey: "#343a40",
        darkModeWhite: "#dee2e6",
      },
    },
  },
  plugins: [],
};
