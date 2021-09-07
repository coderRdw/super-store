<template>
  <Swiper class="imgSwiper">
    <SwiperItem v-for="item in topImages">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>
<script>
import {Swiper,SwiperItem} from "components/common/Swiper/index"
export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.imgSwiper{
  height: 300px;
  overflow: hidden;
}
</style>
