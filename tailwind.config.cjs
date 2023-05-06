/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: "class", // Set darkMode to 'class' for manual toggling
  theme: {
    extend: {
      backgroundColor: {
        light: "#F5F5F5",
        dark: "#0f0e17",
        highlight: "#ff8906",
      },
      textColor: {
        dark: "#2e2f3e",
        light: "#fffffe",
      },
    },
  },
  plugins: [],
};
