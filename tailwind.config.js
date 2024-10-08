/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: "#C92071",
        secondary: "#B5B6F2",
        tertiary: "#991956",
        error: "#EE4266",
        success: "#52CA76",
        warning: "#F6AA1C",
        darkGray: "#1F1F1F",
        darkGray2: "#474747",
        darkGray3: "#666666",
        lightGray: "#8F8F8F",
        lightGray2: "#CCCCCC",
        lightGray3: "#F5F5F5",
        white: "#FFFFFF",
        white2: "#F9F8FE",
        productBlue: "#D8E3F2",
        productOff: "#E7FF86",
        productBg: "#E2E3FF",
        productBg1: "#FFE8BC",
        productBg2: "#FFC0BC",
        productBg3: "#DEC699",
        productBg4: "#E8DFCF",
      },
    },
  },
  plugins: [],
};
