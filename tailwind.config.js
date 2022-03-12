module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        notosans: ["Noto Sans", "sans-serif"],
      },
      colors: {
        "bright-red": "var(--bright-red)",
        "dark-slate": "var(--dark-slate)",
      },
    },
  },
  plugins: [],
};
