module.exports = {
  purge: ["./Front/src/**/*.{js,jsx}", "./Front/public/index.html"], // paths to all componets
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      maxHeight: ["focus"],
      outline: ["responsive", "focus-within", "focus"],
      borderColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
      ],
    },
  },
  plugins: [],
};
