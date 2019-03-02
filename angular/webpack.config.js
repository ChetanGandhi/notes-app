const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dist = path.join(__dirname, "../dist", "notes-angular");

const htmlWebpackPluginConfig = require("./htmlTemplate.config");

module.exports = {
    mode: "development",
    entry: {
        polyfills: "./src/core/polyfills.ts",
        app: "./src/core/index.ts",
        style: "./src/resources/scss/index.scss"
    },
    output: {
        path: dist,
        filename: "[name].js"
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `vendor.${packageName.replace("@", "")}`;
                    }
                }
            }
        }
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: false
                        }
                    }
                ],
                // exclude: /index\.html$/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                loader: ["ts-loader", "angular2-template-loader"]
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)fesm5/, path.resolve("src"), {}),
        new webpack.DefinePlugin({
            ENV_PRODUCTION: false
        }),
        // new CopyPlugin([{ from: "./src/core/index.html", toType: "file" }]),
        new MiniCssExtractPlugin({
            filename: "resources/css/[name].css",
            chunkFilename: "resources/css/[id].css"
        }),
        new HtmlWebpackPlugin(htmlWebpackPluginConfig)
    ]
};
