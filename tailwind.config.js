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
        "bright-red-text": "var(--bright-red-text)",
        "bright-red-bg": "var(--bright-red-bg)",
        "bright-red-hover": "var(--bright-red-hover)",
        "dark-slate": "var(--dark-slate)",
        "js-yellow": "var(--js-yellow)",
        "react-blue": "var(--react-blue)",
        "html-red": "var(--html-red)",
        "css-blue": "var(--css-blue)",
        "git-red": "var(--git-red)",
        "reactrouter-red": "var(--reactrouter-red)",
        "redux-purple": "var(--redux-purple)",
        "styledcomp-pink": "var(--styledcomp-pink)",
        "tailwind-blue": "var(--tailwind-blue)",
        "c-gray": "var(--c-gray)",
        "mysql-blue": "var(--mysql-blue)",
        "figma-red": "var(--figma-red)",
        "ts-blue": "var(--ts-blue)",
        "jest-red": "var(--jest-red)",
      },
    },
  },
  plugins: [],
};
