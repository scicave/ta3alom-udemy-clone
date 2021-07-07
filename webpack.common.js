/**
 * details:
 * 1. CssExtractPlugin is separated due to contenthash in the name
 * 2. Here is the Html Plugin, names are the same in both stages
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;
const contenthash = isProd ? ".[contenthash]" : "";

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: `[name]${contenthash}.bundle.js`,
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["app"],
      minify: isProd && {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    isDev && new MiniCssExtractPlugin({ filename: `[name]${contenthash}.css` })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(s[ca]ss|css)$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader, //3. Extract css into files
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]-[hash:base64:5]"
              }
            }
          }, // 2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: `[name]${contenthash}.[ext]`,
            outputPath: "assets"
          }
        }
      }
    ]
  }
};
