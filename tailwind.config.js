/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        NAV_SELECTED:
          "linear-gradient(90deg, rgba(21, 191, 253, 0.10) 0%, rgba(0, 255, 194, 0.30) 117.12%)",
      },
    },
  },
  plugins: [],
};
