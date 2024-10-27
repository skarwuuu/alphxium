/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["Array", "sans-serif"],
        space: ["Space Grotesk", "monospace"],
      },
      colors: {
        light: "#ffffe3",
        dark: "#10100e",
        accent: "#fff1b5",
      },
    },
  },
  plugins: [],
}