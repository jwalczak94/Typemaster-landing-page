module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      s: "600px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      xxl: "1440px",
    },

    extend: {
      colors: {
        primaryColor: "#162542",
        primaryLight: "#7B8BAD",
        accentColor: "#F16718",
        accentLight: "#FF9B62",
        grey: "#E8EFF2",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
