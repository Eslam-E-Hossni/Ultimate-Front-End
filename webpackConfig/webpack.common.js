const path = require("path");
const { generateHtmlPlugins } = require("./helpers.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = { 
  devtool: "eval-source-map",
  entry: {
    index: path.resolve(__dirname, "../", "src/js/main.ts"),
  },
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "app-assets/js/[contenthash:8]-[name].js",
    clean: true,
  },
  externals: {
    jquery: 'jQuery',
  },
  optimization: {
    runtimeChunk: true,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    ...generateHtmlPlugins("html"),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "app-assets/css/[name].css",
    }),
  ],
  module: {
    rules: [
      {
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        test: /\.(tsx?|js)$/i,
        exclude: /node_,modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset",
        loader: "image-webpack-loader",
        generator: {
          filename: "app-assets/images/[hash][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: "asset",
        exclude: [/images/],
        generator: {
          filename: "app-assets/fonts/[hash][ext]",
        },
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
};