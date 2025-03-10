/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#191919",
        text: "#D9D9D9",
        number: "#009FE3",
        activities: "#292929",
        gift: "#E30613",
      },
      fontFamily: {
        bigShoulders: ['"Big Shoulders Stencil Text"', "sans-serif"],
        bigShouldersText: ['"Big Shoulders Text"', "sans-serif"],
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
        lexend: ['"Lexend Deca"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
