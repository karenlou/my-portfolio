import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        jetbrains: "var(--font-jetbrains)",
        jersey10: "var(--font-jersey10)",
        barlow: "var(--font-barlow)",
        ooohbaby: "var(--font-ooohbaby)",
        rubik: "var(--font-rubik)",
        oxygenmono: "var(--font-oxygenmono)",
        geist: "var(--font-geist)",
        robotomono: "var(--font-robotomono)",
      },
      keyframes: {
        settle: {
          from: {
            transform: "translateY(6)",
            opacity: "0",
          },
          to: {
            translate: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        settle: "settle 1s ease var(--settle-delay, 0)",
      },
    },
  },
  plugins: [],
} satisfies Config;
