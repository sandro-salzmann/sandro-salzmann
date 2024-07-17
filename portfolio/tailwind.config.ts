import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "#201b2b",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
