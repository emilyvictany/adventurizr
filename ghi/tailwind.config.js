// const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'lightorange': '#FFCAAC',
      'navred': '#FE4444',
      'favpink' : '#ffeafa',
      'white' : '#FFFFFF'
    },
  },
  plugins: [require("daisyui"), "@material-tailwind/react/utils/withMT"],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
