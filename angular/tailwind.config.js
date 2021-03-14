const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./*.ejs", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                gray: colors.trueGray
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
