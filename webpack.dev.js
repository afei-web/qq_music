// 开发模式
const base = require("./webpack.base");


module.exports = {
  ...base,
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: __dirname+"/dist",
    host: "localhost",
    port: "7070",
    open: false,
    overlay: {
      errors: true
    },
    // 设置请求代理
    proxy:[
      {
        // 将要发送的各种请求
        context:[
          "/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",
          "/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg"
        ],
        target:"https://c.y.qq.com",// 目标域名
        changeOrigin:true,
        headers:{
          referer:"https://c.y.qq.com",
          host:"c.y.qq.com"
        }
      }
    ]
  }
}