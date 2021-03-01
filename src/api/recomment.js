// 负责recommend的推荐页 请求处理
import axios from 'axios'
// 获取轮播图
export function getSlider(){
    // 存在跨域 使用proxy请求代理
    let url = "/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
    return axios.get(url)
    .then(data=>{
        // data.data.data.slider
        // 将数据转换为promise对象返回
        return Promise.resolve(data.data.data.slider)
    }).catch(err=>{
        // console.log(err);
        return Promise.reject(err)
    })
}  

// 获取热门歌曲推荐
export function getRecommentList(){
    let url = '/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    // 请求参数
    let data = {
        picmid: 1,
        rnd: Math.random(),
        g_tk_new_20200303: 5381,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: "json",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq.json",
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 19
    }
    return axios.get(url,{
        params:data
    })
    .then(data=>{
        // data.data.data.list
        return Promise.resolve(data.data.data.list)
    })
    .catch(err=>{
        // console.log(err);
        return Promise.reject(err)
    })
}