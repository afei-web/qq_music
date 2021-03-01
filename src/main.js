import Vue from "vue"
import App from "./App.vue"
import router from "./router/router"
// 引入vant的轮播图组件
import { Swipe, SwipeItem } from "vant"
// 引入vant的样式
// import "vant/lib/index.css" // vant所有样式
import "vant/lib/swipe/style" // swipe样式
import "vant/lib/swipe-item/style" // swipe-item样式

// 解决移动端点击有300ms延迟的问题
import fastclick from "fastclick"
fastclick.attach(document.body)

// 引入全局样式
import "./common/stylus/index"

// 注册组件
Vue.use(Swipe).use(SwipeItem)

new Vue({
  router,
  render: h=>h(App)
}).$mount("#app")