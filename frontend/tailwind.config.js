/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-testemunhas": "url('../assets/img/BackgroundTestemunhas.svg')",
        "background-testemunhas-tela-grande": "url('../assets/img/BackgroundTestemunhasTelaGrande.svg')",
        "background-pessoa-1": "url('../assets/img/Steve_Jobs.svg')",
        "background-pessoa-2": "url('../assets/img/elon-musk.jpg')",
        "background-fale-conosco": "url('../assets/img/BackgroundEntrarEmContato.png')",
      },
      fontFamily: {
        sans: ["var(--font-libre)"],
        mono: ["var(--font-josefin)"],
        title: ["var(--font-rancho)"],
      },
      colors: {
        "gris-light": "#4A4A4A",
        primary: "#88CC00",
        "primary-light": "#acdb4d",
        "primary-dark": "#6da300",
        secondary: "#FF6700",
        "secondary-light": "#ff8533",
        "secondary-dark": "#cc5200",
      },
    },
  },
  plugins: 
  [ require("@tailwindcss/typography"),],
};
