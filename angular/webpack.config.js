const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPluginConfig = require("./htmlTemplate.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { AngularCompilerPlugin } = require("@ngtools/webpack");

const dist = path.join(__dirname, "dist", "app");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.ts",
        style: "./src/index.scss",
        icons: "./iconfont.config.js"
    },
    output: {
        path: dist,
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "[name].[chunkhash:8].chunk.js",
        publicPath: "/"
    },
    optimization: {
        runtimeChunk: "single",
        emitOnErrors: false,
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `vendor/${packageName.replace("@", "")}`;
                    }
                }
            }
        }
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
        extensions: [".ts", ".scss", ".js"]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\iconfont\.config\.js/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "webfonts-loader",
                        options: {
                            publicPath: "/"
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contenthash:8].[ext]",
                            outputPath: "resources/fonts"
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contenthash:8].[ext]",
                            outputPath: "resources/images"
                        }
                    }
                ]
            },
            {
                test: /\.(s?css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                syntax: "postcss-scss",
                                plugins: ["postcss-import", "tailwindcss", "autoprefixer"]
                            }
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
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: "@ngtools/webpack"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            esModule: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new AngularCompilerPlugin({
            tsConfigPath: path.join(__dirname, "./tsconfig.json"),
            mainPath: path.join(__dirname, "./src/main.ts"),
            entryModule: "src/app/app.module#AppModule",
            sourceMap: true,
            nameLazyFiles: true
        }),
        new MiniCssExtractPlugin({
            filename: "resources/css/[name].[contenthash:8].css",
            chunkFilename: "resources/css/[name].[contenthash:8].css"
        }),
        new HtmlWebpackPlugin(htmlWebpackPluginConfig)
    ]
};
