/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { glass: "rgba(255,255,255,0.15)" },
      backdropBlur: { xs: "2px" },
      borderRadius: { "3xl": "1.5rem" },
      boxShadow: { glass: "0 10px 30px rgba(0,0,0,0.15)" },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "color-shift-orange": "color-shift-orange 3s ease-in-out infinite", // ★追加
      },
      keyframes: {
        "color-shift-orange": {
          "0%, 100%": { backgroundColor: "rgba(251,191,36,0.6)" }, // amber-400
          "50%": { backgroundColor: "rgba(249,115,22,0.6)" },      // orange-500
        },
      },
    },
  },
  plugins: [],
};
