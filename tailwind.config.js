/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "577px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1441px",
    },
  },
  plugins: [],
};
