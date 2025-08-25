/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Bold", "sans-serif"],
        "rubik-bold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serig"],
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semiBNold": ["Rubik-SemiBold", "sans-serif"],
        "rebik-extrabold": ["Rubik-ExtraBold", "sans-serif"]
      },
      color: {
        "primary": {
          100: "#0061ff0a",
          200: "#0061ff1a",
          300: "#0061ff2a"
        },
        accent: {
          100: "#fbfbfd"
        },
        black: {
          DEFAULT: "#000000",
          100: "#8c8e98",
          200: "#666876",
          300: "#191d31"
        },
        danger: "#f75555"
      }
    },
  },
  plugins: [],
}