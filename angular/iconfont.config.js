module.exports = {
    // All svg files to convert to icon.
    files: ["./src/resources/icons/*.svg", "./src/resources/logo/*.svg"],

    // Target path where to save generated font and scss file.
    dest: "/resources/fonts",

    // The font name i.e. font family.
    fontName: "PaperNoteIcon",

    // The font file name format.
    fileName: "[fontname].[chunkhash].[ext]",

    // The css class prefix for all icons.
    classPrefix: "paper-note-icon-",

    // The css class name for all icons.
    baseSelector: ".paper-note-icon",

    // Which fonts to generate.
    types: ["ttf", "woff", "woff2"],

    // The length of hash in file name, not working for chunkhash at the moment.
    hashLength: 8,

    // Enable font ligature, not working at the moment.
    ligature: true,

    // Other options to be passed to svgicons2svgfont library.
    svgicons2svgfont: {
        centerHorizontally: true,
        fontHeight: 16
    }
};
