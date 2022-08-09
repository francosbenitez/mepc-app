/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        mm: ["Montserrat Medium"],
        ms: ["Montserrat SemiBold"],
        mb: ["Montserrat Bold"],
        me: ["Montserrat ExtraBold"],
        mbl: ["Montserrat Black"],
      },
      backgroundImage: {
        "arrow-left": "url('/icons/arrow-left.svg')",
      },
      colors: {
        primary: "#004aad",
        body: "#f4f7f5",
        text: "#313131",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
