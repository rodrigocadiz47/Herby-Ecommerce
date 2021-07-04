module.exports = {
  purge: ["./Front/src/**/*.{js,jsx}", "./Front/public/index.html"], // paths to all componets
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        lora: ["Lora"],
      },
    },
  },
  variants: {
    extend: {
      outline: ["responsive", "focus"],
      borderColor: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
