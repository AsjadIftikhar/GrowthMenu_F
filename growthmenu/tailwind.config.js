module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Grey: "#F8F9FA",
        DarkBlue: "#050F94",
        LightBlue_1: "#4ABFD4",
        DarkPurple: "#262A4E",
        LightYellow: "#F7F651",
        IconGrey: "#A9A9A9",
        white: "#fff",
        black: "#000",
        LightPink: "#FFECEF",
        LightBlue: "#EAF9FF",
        LightBlue_2: "#F4F5FF",
        Yellow_1: "#FFF6D3",
        LightGreen: "#E4FFEE",
        LightIndigo: "#F4F4FF",
        DarkIndigo: "#4E2D92",
        LightOrange: "#FDEEE4",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
