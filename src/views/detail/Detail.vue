<template>
<div id="detail">
  <DetailNavBar class="nav-bar"></DetailNavBar>
  <Scroll class="content" ref="scroll">
    <DetailSwiper :topImages="topImages"/>
    <DetailBaseInfo :goods="goods"/>
    <DetailShopInfo :shop="shop"/>
    <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="imageLoad"/>
    <DetailParamInfo :paramInfo="goodsParams"/>
  </Scroll>
</div>
</template>
<script>
import {getDetailData,Goods,Shop,GoodsParam} from "network/detail";
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParamInfo from "./childComponents/DetailParamInfo";
import Scroll from "components/common/Scroll/Scroll";
export default {
  name: "Detail",
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParams:{}
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
  },
  created(){
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
  //  2.detail页面请求数据
    getDetailData(this.iid).then(res=>{
    //  1.获取顶部的轮播图数据
      const result =res.result;
      // console.log(result)
      this.topImages = result.itemInfo.topImages;
      // 2.获取商品信息
      this.goods =new Goods(result.itemInfo,result.columns,result.shopInfo.services);
    //  3.获取商家信息
      this.shop = new Shop(result.shopInfo);
    //  4.获取商品详情信息
      this.detailInfo =result.detailInfo;
    //  5.获取参数信息
      this.goodsParams = new GoodsParam(result.itemParams.info,result.itemParams.rule)
    })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh();
    }
  }
}
</script>

<style scoped>
#detail{
  position:relative ;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.nav-bar{
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content{
  height:calc( 100% - 44px);
}
</style>
