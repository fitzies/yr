import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kamerik: ["Kamerik"],
        "kamerik-bold": ["Kamerik-Bold"],
      },
      colors: {
        light: "#4a4a4a",
      },
    },
  },
  plugins: [],
};
export default config;
