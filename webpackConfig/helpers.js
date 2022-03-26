const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const path = require("path");

module.exports = {
  generateHtmlPlugins(templateDir) {
    const src = path.resolve(__dirname, "../src", templateDir);
    const templateFiles = glob.sync(`${src}/**/*.pug`)

    return templateFiles.map(file => {
      // D:\Web_Development\Study\Project's\Ultimate Front-End Practical\src\html\index.pug
      const base = file.split("html")[1].substring(1);
      // index.pug
      const name = base.split(".")[0];
      // dashboard
      const arr = name.includes("/") ? name.split("/") : name;
      // if has sub folders
      const chunkName = name.includes("/") ? arr[arr.length - 1] : name;

      return new HtmlWebpackPlugin({
        filename: !name.includes("/")
          ? 'index.html'
          : `pages/${chunkName}.html`,
        template: path.resolve(__dirname, "../src/html", `${base}`),
        inject: "body",
        publicPath: "./",
        minify: {
          removeComments: true,
          collapseWhitespace: false,
        },
        chunks: [chunkName],
      });
    })
  }
}