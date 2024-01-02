/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        clear: "#FEFAE0",
        clean: "rgba(254, 250, 224, 0.3)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        bounce: "bounce 3s infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        aboreto: ["Aboreto", "sans-serif"],
        sacramento: ["Sacramento", "sans-serif"],
        gotu: ["Gotu", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to right bottom, #000000, #271d1e, #483433, #6b4e46, #8e6a58, #a27f67, #b69678, #c9ad89, #d5c09d, #e2d3b3, #f0e7c9, #fefae0);",
      },
    },
  },
  plugins: [],
};
