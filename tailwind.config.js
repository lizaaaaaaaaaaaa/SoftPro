module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.scss"],
  theme: {
    extend: {
      colors: {
        customBlack: "#101010",
        lemon: "#e0fc52",
        blue: "#2969f6",
        gray: "#d3d3d3",
        hoverColor: "#373737",
      },
      screens: {
        1260: "1260px",
        1000: "1000px",
        580: "580px",
        280: "280px",
      },
      borderRadius: {
        "4xl": "30px",
      },
      fontSize: {
        44: "44px",
        13: "13px",
      },
      maxWidth: {
        1220: "1220px",
      },
      spacing: {
        140: "140px",
        13: "13px",
        60: "60px",
      },
      borderWidth: { 1: "1px" },
    },
  },
  plugins: [],
};
