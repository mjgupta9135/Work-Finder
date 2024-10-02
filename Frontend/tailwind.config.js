/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"], // Default sans fonts
        serif: ["ui-serif", "Georgia"], // Default serif fonts
        mono: ["ui-monospace", "SFMono-Regular"], // Default mono fonts
        display: ["Poppins", "sans-serif"], // Custom display font (Poppins)
        body: ['"Open Sans"', "sans-serif"], // Custom body font (Open Sans)
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: 0, transform: "translateX(-10px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: 0, transform: "translateX(10px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.3s ease-out",
        fadeInLeft: "fadeInLeft 0.5s ease-out",
        fadeInRight: "fadeInRight 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
