/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, html, js, jsx}"],
  // purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "cat-dark": "#333333",
        "cat-light": "#f5f5f5",
        "cat-white": "#fafafa",
        "cat-night-header": "#010409",
        "cat-night-background": "#0e1117",
        "cat-night-button": "#22262d",
        "cat-night-white": "#e7edf3",
        "cat-wild-sand": "#f5f5f5",
        "pallete-unsat-blue": "#8DA9C4",
        "pallete-sat-blue": "#134074",
        "pallete-dark-blue": "#13315C",
        "pallete-navy": "#0B2545",
        "pallete-beige": "#EEF4ED",

        text: "#0b0c11",
        background: "#fafbfc",
        primary: "#6f7aa2",
        "primary-light": "#dde1ea",
        secondary: "#cab0ac",
        "secondary-light": "#f0ecec",
        accent: "#93d56f",
        "accent-light": "#bce4a6",
        undertone: "#f3f4f7",
        "undertone-red": "#f6f4f4",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blinkingBorder: {
          "0%, 49%": { "border-right": "5px solid white" },
          "50%, 99%": { "border-right": "5px solid black" },
        },
        shift: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(15px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s infinite",
        blinkingBorder: "blinkingBorder 1.06s none infinite",
        shifting: "shift 0.7s ease-in-out 1",
      },
    },
  },
};
