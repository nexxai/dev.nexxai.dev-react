import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
      keyframes: {
        marquee: {
          "0%, 5%": {
            opacity: 0,
          },
          "12.5%": {
            opacity: 1,
          },
          "20%, 30%": {
            opacity: 0,
          },
          "37.5%": {
            opacity: 1,
          },
          "45%, 55%": {
            opacity: 0,
          },
          "62.5%": {
            opacity: 1,
          },
          "70%, 80%": {
            opacity: 0,
          },
          "87.5%": {
            opacity: 1,
          },
          "95%, 100%": {
            opacity: 0,
          },

          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      fontFamily: {
        heading: [
          "Mona Sans",
          {
            fontVariationSettings: '"wdth" 125',
          },
        ],
        sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        nav: ["Poppins", ...defaultTheme.fontFamily.sans],
        fv: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        lgtv: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
      },
    },
  },
  plugins: [],
};
