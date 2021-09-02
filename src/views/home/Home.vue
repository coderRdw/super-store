<template>
  <div id="home">
<!--    home页应该是整个nav-bar都填充颜色-->
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
<!--轮播图-->
    <Scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true"
            @contentScroll="contentScroll" @fetchMoreData="LoadMore">
      <HomeSwiper :cbanners="banners"></HomeSwiper>
      <HomeRecommendView :crecommends="recommends"></HomeRecommendView>
      <HomeFeatureView/>
      <TabControl :ctitles="titles" class="tab-control" @tabClick="TabClick"></TabControl>
      <GoodsList :goodslist="goods[currentType].list"/>
    </Scroll>
    <back-top  @click.native="BackClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComponents/HomeSwiper";
import HomeRecommendView from "./childrenComponents/HomeRecommendView";
import HomeFeatureView from "./childrenComponents/HomeFeatureView";

import NavBar from "components/common/NavBar/NavBar";
import TabControl from "components/content/TabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import GoodsListItem from "components/content/Goods/GoodsListItem";
import Scroll from "components/common/Scroll/Scroll"
import BackTop from "components/content/BackTop/BackTop";

import {getHomeMultiData,getHomeData} from "network/home";

export default {
  name: "Home",
  components:{
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    GoodsListItem,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners:[],
      recommends:[],
      titles:["流行","新款","精选"],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false
    }
  },
  created() {
    //请求多个数据
    this.getHomeBaseData();
    //请求商品数据
    this.getHomeGoodsData('pop');
    this.getHomeGoodsData('new');
    this.getHomeGoodsData('sell');
  },
  methods:{
    /*监听事件*/
    TabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        default:
          this.currentType = 'sell'
      }
    },
    BackClick(){
      //对回到顶部进行封装
      this.$refs.scroll.scrollToTop(0,0)
    },
    //通过监听Scroll组件实现回到顶部
    contentScroll(position){
      // console.log(position)
      // position.y是赋值
      this.isShowBackTop = (-position.y)>1000
    },
    LoadMore(){
      this.getHomeGoodsData(this.currentType)
    },
    /* 网络请求 */
    //在外面封装网络请求为一个函数
    getHomeBaseData(){/*首页的列表和推荐数据*/
      getHomeMultiData().then(res=>{
        //getHomeMultiData返回值是request
        // console.log(res)
        // console.log(typeof res.data.banner)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      },err=>{
        console.log(err)
      })
    },
    getHomeGoodsData(type){/*Tabbcontrol数据*/
      const page = this.goods[type].page + 1;
      getHomeData(type,page).then(res=>{
      //  push函数传参数
        this.goods[type].list.push(...res.data.list)
        // console.log(this.goods[type].list)
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav{
  /*颜色引用base.css文件*/
  background-color: var(--color-tint);
  color:#ffffff;
  position: fixed;
  top: 0;
  left:0;
  right:0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index:9;
}
.content{
  overflow: hidden;
  /*使用定位来确定scroll的位置*/
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
