<template>
  <div class="recommend">
    <div class="recommend-content">
      <!-- 轮播图 -->
        <Slider :list="list"></Slider>
      <div class="slider-wrapper"></div>
      <!-- 热门歌曲列表 -->
      <div class="recommend-list">
        <h1 class="list-title">热门歌曲推荐</h1>
        <ul>
          <li v-for="(item,idx) in hot" :key="idx" class="item">
            <div class="p-left">
            </div>
            <div class="p-right"></div>
            <div class="icon">
              <img :src="item.imgurl" class="recom-img">
            </div>
            <div class="text">
              <div class="name">
                {{item.creator.name}}
              </div>
              <div class="desc">
                {{item.dissname}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '../../base/slide/slider'
import {getSlider,getRecommentList} from '../../api/recomment'
export default {
  data() {
    return {
      list:undefined,// 轮播图列表
      hot:undefined// 推荐热门歌曲列表
    }
  },
  components:{
    Slider
  },
  methods: {
    _getSlider(){// 获取轮播图数据
        getSlider().then(slider=>{
          this.list = slider;
        }).catch(err=>{
          console.log(err);
        })
    },
    _getRecommendList(){// 获取热门歌曲推荐
      getRecommentList().then(list=>{
          this.hot = list;
          console.log(this.hot);
        }).catch(err=>{
          console.log(err);
        })
    }
  },
  created() {
    this._getSlider(),
    this._getRecommendList()
  },
}
</script>

<style scoped lang="stylus" >
@import '~@common/stylus/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow hidden
    .slider-wrapper
      position relative
      width 100%
      overflow hidden
    .recommend-list
      height 100%
      overflow hidden
      position relative
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium-x
        color $color-theme
      .item
        display inline-flex
        box-sizing border-box
        align-items center
        flex-direction column
        width 50%
        .p-left
          padding-left 10px
        .p-right
          padding-right 10px
        .icon
          flex 0 0 60px
          max-width 160px
          .recom-img
            border-radius 10px
            max-width 160px
        .text
          line-height 20px
          font-size $font-size-medium
          max-width 160px
          margin-top 6px
          .name
            margin-bottom 10px
            color #888
          .desc
            color $color-text-d
    .loading-container
      display flex
      align-items center
      justify-content center
      transform translateY(100%)
  .slide-enter-active, .slide-leave-active
    transition all 0.5s
  .slide-enter, .slide-leave-to
    transform translateX(100%)
</style>