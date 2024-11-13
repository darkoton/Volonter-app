/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
import flowbiteTypography from "flowbite-typography"
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [
    flowbite({
      wysiwyg: true,
    }),
    flowbiteTypography
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1130px",
    },
    extend: {
      colors: {
        yellow: {
          100: "#fce8a3",
          200: "#f9d75d",
          300: "#f6c217",
          400: "#f3a710",
          500: "#f59f31",
          600: "#e68d2a",
          700: "#d67a24",
          800: "#c6681e",
          900: "#b55718",
        },
        orange: {
          100: "#fce5d4",
          200: "#f9c9aa",
          300: "#f5ac7f",
          400: "#f18f55",
          500: "#ea7d2a",
          600: "#d16925",
          700: "#b6551f",
          800: "#9a4119",
          900: "#7f2d14",
        },
        red: {
          100: "#f9ded8",
          200: "#f3bdb1",
          300: "#ed9c8a",
          400: "#e77a63",
          500: "#de5737",
          600: "#c54e31",
          700: "#ac442b",
          800: "#933b25",
          900: "#7a321f",
        },
        turquoise: {
          "100": "#d1ecef",
          "200": "#a3d8df",
          "300": "#75c3cf",
          "400": "#47afbf",
          "500": "#1a7e8b",
          "600": "#166a74",
          "700": "#12555d",
          "800": "#0e4046",
          "900": "#0a2b2f"
        },
        "sky-blue": {
          100: "#e4f5f5",
          200: "#a4cbcb",
          300: "#88b8b8",
          400: "#6ca5a5",
          500: "#509292",
          600: "#3e7474",
          700: "#2c5656",
          800: "#1a3838",
          900: "#081a1a",
        },
      },
    },
  },
};
