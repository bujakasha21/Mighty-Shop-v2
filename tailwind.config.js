module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    fontFamily: {
      primary: "Bebas Neue",
      secondary: "Crimson Text",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        mainColor: "#191d1d",
      },
    },
  },
  plugins: [],
};
