import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true,
    },
    fontFamily:{
      Poppins:["Poppins","sans-serif"],
      Inter:["Inter","sans-serif"],
      Vazirmatn:["Vazirmatn","sans-serif"],


    }
  },
  plugins: [],
} satisfies Config;
