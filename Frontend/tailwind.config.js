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
    },
  },
  plugins: [],
};
