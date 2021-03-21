const twColors = require("tailwindcss/colors");
const twTypography = require("@tailwindcss/typography");
const twForms = require("@tailwindcss/forms");
const twClamp = require("@tailwindcss/line-clamp");
const twRatio = require("@tailwindcss/aspect-ratio");
const daisyui = require("daisyui");
const daisyuiColors = require("daisyui/colors");

module.exports = {
    purge: {
        content: ["./*.ejs", "./src/**/*.{html,js,ts,jsx,tsx}"],
        safelist: [/data-theme$/]
    },
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                gray: twColors.trueGray,
                ...daisyuiColors
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [daisyui, twTypography, twForms, twClamp, twRatio],
    daisyui: {
        styled: true,
        themes: true,
        rtl: false
    }
};
