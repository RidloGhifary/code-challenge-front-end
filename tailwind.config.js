/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        mainColor: "#f4791f",
        secondaryTextGray: "#737373",
        backgroundLightGray: "rgb(245, 245, 245)",
      },
    },
  },
  plugins: [],
};
