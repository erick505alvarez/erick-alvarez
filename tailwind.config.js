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
        white: "#FCFCFC",
        orange: {
          500: "#DD7A09",
          300: "#EA9C3E",
          200: "#F0C795",
          100: "#FDFAF2",
        },
        yellow: {
          500: "#E4BF1F",
          300: "#F2E4A4",
          100: "#FCF8E6",
        },
        purple: {
          500: "#D773FF",
          300: "#D695F0",
          200: "#EDC5FD",
          100: "#F6E6FC",
        },
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
        "float-github": "float 1.5s infinite ease-in-out 0s",
        "float-linkedin": "float 2.25s infinite ease-in-out 0.2s",
        "float-tiktok": "float 2s infinite ease-in-out 0.3s",
        "float-instagram": "float 2.5s infinite ease-in-out 0.5s",
      },
    },
  },
  plugins: [],
};
