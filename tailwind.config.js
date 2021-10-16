module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        yellow: "hsl(51, 100%, 49%)",
        "soft-red": "hsl(7, 99%, 70%)",
        "dark-desaturated-cyan": " hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-gray-blue": "hsl(213, 9%, 39%)",
        "dark-gray-blue": "hsl(232, 10%, 55%)",
        "gray-blue": "hsl(210, 4%, 67%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
