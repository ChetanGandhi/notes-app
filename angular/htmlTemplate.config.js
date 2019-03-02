module.exports = {
    title: "Notes",
    base: "/",
    template: "src/core/index.ejs",
    chunksSortMode: "dependency",
    meta: {
        viewport: "width=device-width, initial-scale=1.0",
        "Content-Security-Policy": { "http-equiv": "X-UA-Compatible", content: "ie=edge" }
    },
    xhtml: true,
    minify: false
};
