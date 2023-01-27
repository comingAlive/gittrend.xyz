const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        slate: colors.slate,
        cyan: colors.cyan,
        sky: colors.sky,
        lime: colors.lime,
        orange: colors.orange,
        rose: colors.rose,
        teal: colors.teal,
        neutral: colors.neutral,
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
