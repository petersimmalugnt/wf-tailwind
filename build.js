const fs = require("fs");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");

const css = "@tailwind base; @tailwind components; @tailwind utilities;";

postcss([tailwindcss("./tailwind.config.js")])
  .process(css, { from: undefined })
  .then((result) => {
    fs.writeFileSync("output.css", result.css);
  });
