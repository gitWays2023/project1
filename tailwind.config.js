/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        "xs":"491px",
        "mxs":"600px",
        "sm":"971px",
        "md":"700px",
        "lg":"940px",
        "xl":"1030px",
        "2xl":"1100px",
        "3xl":"1200px"
      },
      // 'xs': '480px', 
      //   'sm': '640px', 
      //   'md': '768px', 
      //   'lg': '1024px', 
      //   'xl': '1280px', 
      //   '2xl': '1536px',
      //   'max-sm': { 'max': '639px' },
    },
  },
  plugins: [],
};
