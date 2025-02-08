/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#FDFAF2",
        primary: "#DD7A09",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(-50%, -50%)" },
          "50%": { transform: "translate(-50%, calc(-50% - 2.5px))" },
          "100%": { transform: "translate(-50%, -50%)" },
        },
      },
      animation: {
        "float-github": "float 1.5s infinite ease-in-out",
        "float-linkedin": "float 2.25s infinite ease-in-out",
        "float-tiktok": "float 2s infinite ease-in-out",
        "float-instagram": "float 2.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
