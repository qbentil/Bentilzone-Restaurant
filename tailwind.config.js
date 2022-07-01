module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f3f3",
        headingColor: "#2e2e2e",
        cartNumBg: "#e80013",
        textColor: "#515151",
        cardOverlay: "rgba(256, 256, 256, 0.4)",
        btnOverlay: "rgba(255, 255, 255, 0.8)",
        lightGray: "#9ca0ab",
        containerbg: "rgba(255, 131, 0, 0.04)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
      display: ["group-hover"]
    },
    plugins: [],
  },
};
