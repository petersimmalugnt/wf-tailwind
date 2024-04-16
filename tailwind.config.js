module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        "1/1": "1 / 1",
        "3/2": "3 / 2",
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
