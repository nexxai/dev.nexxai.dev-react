import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.{html,js,svg}"],
  theme: {
    extend: {
      colors: {
        gold: "#cea764",
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
        ipms: ["Inter Sans", ...defaultTheme.fontFamily.sans],
        lgtv: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
      },
    },
  },
  plugins: [],
};
