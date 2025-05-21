/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        d: ["Montserrat", "sans-serif"],
      },
      screens: {
        xsm: "425px",
        "x-480": "480px",
        "x-720": "720px",
        "x-990": "990px",
        "x-580": "580px",
      },
      backgroundImage: {
        "client-bg": "url('asset 26.jpeg')",
        "client-dots": "url('asset 25(1)(1).png')",
      },
    },
  },
  plugins: [],
};
