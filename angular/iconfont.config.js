const path = require("path");

module.exports = {
    // All svg files to convert to icon.
    files: [path.resolve(__dirname, "./src/resources/icons/*.svg"), path.resolve(__dirname, "./src/resources/logo/*.svg")],

    // Target path where to save generated font and scss file.
    dest: path.resolve(__dirname, "./src/resources/icons/fonts"),

    // The base URL to be used in css to load the font file.
    // This must match with the path specified in webpack config for fonts.
    templateFontPath: "/resources/icons/fonts",

    // The css class name.
    templateClassName: "pn-icon",

    // The font name i.e. font family.
    fontName: "PaperNoteIcon",

    // Which fonts to generate.
    formats: ["ttf", "woff", "woff2"],

    // Abort in case of error.
    bail: true,

    // What kind of css to generate.
    template: "scss",

    // Other options to be passed to svgicons2svgfont library.
    svgicons2svgfont: {
        centerHorizontally: true,
        fontHeight: 16,
        addAhashInFontUrl: true
    }
};
