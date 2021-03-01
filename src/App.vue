<template>
  <div id="app">
    <!-- 根组件 -->
    <!-- 标题 m-header -->
    <MHeader></MHeader>
    <!-- 导航链接 tab -->
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from "./components/tab/tab"
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>