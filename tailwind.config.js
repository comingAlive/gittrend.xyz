const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");


module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        blueGray: colors.blueGray,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        lime: colors.lime,
        orange: colors.orange,
        rose: colors.rose,
        teal: colors.teal,
        trueGray: colors.trueGray,
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],

};
