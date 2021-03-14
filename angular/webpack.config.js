const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPluginConfig = require("./htmlTemplate.config");
const { AngularCompilerPlugin } = require("@ngtools/webpack");

const dist = path.join(__dirname, "dist", "app");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.ts",
        style: "./src/resources/scss/index.scss"
    },
    output: {
        path: dist,
        filename: "[name].[chunkhash:8].js",
        chunkFilename: "[name].[chunkhash:8].chunk.js",
        publicPath: "/"
    },
    optimization: {
        runtimeChunk: "single",
        noEmitOnErrors: true,
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
                test: /\.(woff|woff2|eot|ttf|otf)$/,
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require("autoprefixer")]
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
                // This hides some deprecation warnings that Webpack throws
                test: /[/\\]@angular[/\\]core[/\\].+\.js$/,
                parser: {
                    system: true
                }
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
        new CleanWebpackPlugin(),
        new AngularCompilerPlugin({
            tsConfigPath: path.join(__dirname, "./tsconfig.json"),
            mainPath: path.join(__dirname, "./src/main.ts"),
            entryModule: "src/app/app.module#AppModule",
            sourceMap: true,
            nameLazyFiles: true
        }),
        new MiniCssExtractPlugin({
            filename: "resources/css/[name].[contenthash:8].css",
            chunkFilename: "resources/css/[name].[contenthash:8].css",
            esModule: true
        }),
        new HtmlWebpackPlugin(htmlWebpackPluginConfig)
    ]
};
