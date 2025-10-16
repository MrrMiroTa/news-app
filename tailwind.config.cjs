/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#06b6d4", // cyan-500
          light: "#67e8f9",
          dark: "#0e7490",
        },
        accent: "#10b981", // green-500
        page: "#f8fafc",
      },
      boxShadow: {
        card: "0 6px 18px rgba(7,22,33,0.08)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
