// 生产环境下的配置
const base = require("./webpack.base");
const {merge} = require("webpack-merge");

module.exports = merge(base, {
  mode: "production",
  devtool: "source-map"
})