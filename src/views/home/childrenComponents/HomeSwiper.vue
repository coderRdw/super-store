<template>
  <div id="HomeSwiper">
  <Swiper>
    <SwiperItem v-for="item in cbanners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/Swiper/index"
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    //Home组件传递数据HomeSwiper
    cbanners:{
      type:Array,
      default(){
       return []
      }
    }
  },
  data(){
    return {
      isLoad:false
    }
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){
        this.$emit("SwiperImgLoad")
        this.isLoad =true;
      }
    }
  },
}
</script>

<style scoped>

</style>
