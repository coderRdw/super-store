<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BetterScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
      //1. 新建better-scroll对象
      this.scroll = new BetterScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        observeDOM:true
      })
      //2.监听滚动区域
      this.scroll.on('scroll',(position)=>{
        //子组件向父组件通信;
        this.$emit('contentScroll',position)
      })
      //3.上拉加载请求更多数据
      this.scroll.on('pullingUp',()=>{
        // console.log("上拉加载更多");
        this.$emit('fetchMoreData')
      })
  },
  methods:{
    //封装方法，供外部调用实现scroll回到顶部
    scrollToTop(x,y,time=500){
      this.scroll.scrollTo(0,0,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    }
  }
}
</script>

<style scoped>

</style>
