<template>
  <div class="slider">
    <van-swipe class="my-swipe slider-group" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img,idx) in list" :key="idx" class="slider-item">
        <img :src="img.picUrl">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// 轮播图组件 只负责展示轮播图 不负责获取数据
// 需要的数据由调用者提供
export default {
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
 @import '../../common/stylus/variable.styl';


.slider {
  min-height: 1px;


  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;


    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;


      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }


      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>