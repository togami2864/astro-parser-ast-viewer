const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsChecker = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, "src/index.tsx")],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
    host: "0.0.0.0",
  },
  plugins: [
    new ForkTsChecker(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/template/index.html`,
      filename: "index.html",
      chunks: ["bundle"],
      inject: "body",
      scriptLoading: "defer",
    }),
  ],
};
