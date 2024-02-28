/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "5px 10px 20px 5px rgb(18,255,185,0.5) inset",
      },
      colors: {
        custom: {
          500: "rgb(18, 225, 185,0.5)",
          600: "rgb(18, 225, 185,0.3)", // Custom color
          // Custom color
        },
      },
      // Other configurations...
    },
  },
  plugins: [],
};
