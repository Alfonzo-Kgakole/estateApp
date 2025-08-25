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
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semiBold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"]
      },
      colors: {
        "primary": {
          100: "#0061ff0a",
          200: "#0061ff1a",
          300: "#0061ff2a",
          400: "#0061ff",
          500: "#0052d4"
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
        danger: "#f75555",
        success: "#4ade80",
        warning: "#fbbf24"
      }
    },
  },
  plugins: [],
}
