/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          3: "#060714",
          2: "#262840",
          4: "#7780A1",
          5: "#DDEOEB",
          6: "#F1F1F6",
          7: "#F2F3F6",
          8: "#2A27C9",
          9: "#514CFF",
          10: "#132A27C9",
          11: "#1A514CFF",
          12: "#76DECC",
          13: "#EA6CBC",
          14: "#FB4539",
        },
        gradient: {
          1: "linear-gradient(180deg, rgba(6, 7, 20, 0) 0%, #060714 100%)",
        },
        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
