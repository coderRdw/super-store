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
    if(this.probeType===2||this.probeType===3){
      this.scroll.on('scroll',(position)=>{
        //子组件向父组件通信;
        this.$emit('contentScroll',position)
      })
    }

       // this.scroll.refresh();
      // console.log(this.scroll);
      //3.上拉加载请求更多数据
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        // console.log("上拉加载更多");
        this.$emit('fetchMoreData')
      })
    }
  },
  methods:{
    //封装方法，供外部调用实现scroll回到顶部
    scrollTo(x,y,time=300){
      this.scroll&& this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll&&this.scroll.finishPullUp();
    },
    refresh(){
      // console.log("---")
      this.scroll&&this.scroll.refresh();
    }
  }
}
</script>
<style scoped>

</style>
