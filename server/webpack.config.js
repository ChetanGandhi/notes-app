const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const dist = path.join(__dirname, "dist");

module.exports = {
    entry: ["webpack/hot/poll?100", "./src/index.ts"],
    target: "node",
    mode: "development",
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false, // if you don't put this is, __dirname
        __filename: false // and __filename return blank or /
    },
    externalsPresets: { node: true },
    externals: [
        nodeExternals({
            allowlist: ["webpack/hot/poll?100"]
        })
    ],
    output: {
        path: dist,
        filename: "main.js",
        publicPath: "/"
    },
    devtool: "source-map",
    stats: {
        all: false,
        builtAt: true,
        colors: true,
        errorDetails: true,
        errors: true,
        timings: true,
        warnings: true
    },
    resolve: {
        // JS must be last else watch mode do not work
        extensions: [".tsx", ".ts", ".js"]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!public/**", "!node_modules/**"],
            verbose: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: "./package.json" }, { from: "./package-lock.json" }]
        })
    ]
};
