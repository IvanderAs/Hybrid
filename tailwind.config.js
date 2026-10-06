/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        surface: "#0d141a",
        "on-surface": "#dce3ec",
        "on-surface-variant": "#bbcabf",
        "surface-container-lowest": "#080f15",
        "surface-container-low": "#151c22",
        "surface-container": "#192026",
        "surface-container-high": "#242b31",
        "surface-container-highest": "#2e363c",
        primary: "#4edea3",
        "on-primary": "#003824",
        "primary-container": "#10b981",
        "on-primary-container": "#00422b",
        "tertiary-fixed-dim": "#ffb95f",
        error: "#ffb4ab",
      },
    },
  },
  plugins: [],
};