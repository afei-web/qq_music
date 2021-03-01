// webpack的基本通用配置
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  resolve: {
    extensions: [".js",".json",".jpg",".jpeg",".png",".css",".vue",".styl"], // 配置后缀名,在引入模块时,可以省略配置的后缀名
    alias: {
      "@common":"../../common"
    }
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "[name]-[hash:6].js"
  },
  module: {
    rules: [
      // 配置样式
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader, // 抽离独立的css文件
          "css-loader"
        ]
      },
      {
        test:/\.(styl|stylus)$/,
        use:[
          MiniCssExtractPlugin.loader, // 抽离独立的css文件
          "css-loader",
          "stylus-loader"
        ]
      },
      // 配置静态资源文件
      {
        test: /\.(png|jpeg|jpg|gif|bmp|eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: "url-loader",
          options: {
            esModule: false
          }
        }
      },
      // 配置babel
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/ //排除node_modules文件
      },
      // 配置Vue
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      minify: { // 压缩模板的选项
        removeComments: true, // 删除注释
        removeTagWhitespace: true, // 删除换行和空白
        collapseWhitespace: true, // 删除空白
        minifyCSS: true, // 压缩css
        minifyJS: true // 压缩js
      }
    }),
    new CleanWebpackPlugin(), // 清空之前打包的残留
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:6].css"
    }),
    // 配置vue-loader插件
    new VueLoaderPlugin()
  ],
}