import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// special thanks to: https://soorria.com/snippets/tailwindcss-hocus
const hocusPlugin = plugin(({ addVariant }) => {
  addVariant("hocus", ["&:hover", "&:focus"]);
  addVariant("hocus-within", ["&:hover", "&:focus-within"]);
  addVariant("group-hocus", [
    ":merge(.group):hover &",
    ":merge(.group):focus &",
  ]);
  addVariant("group-hocus-within", [
    ":merge(.group):hover &",
    ":merge(.group):focus-within &",
  ]);
});

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      main: {
        0: "#26282B",
        100: "#005B41",
        200: "#008170",
      },
      white: "#f5f5f5",
      black: "#000",
      transparent: "transparent",
    },
  },
  plugins: [hocusPlugin],
} satisfies Config;
