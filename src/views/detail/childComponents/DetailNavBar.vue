<template>
  <NavBar>
    <div slot="left" class="back-img" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" class="item"
       :class="{active:currentIndex===index}" @click="changeItem(index)" >
        <span>{{item}}</span>
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar  from "components/common/NavBar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return {
      titles:["商品","参数","评论","推荐"],
      currentIndex:0
    }
  },
  methods:{
    changeItem(index){
      this.currentIndex = index;
    //  触发跳转页面
    },
    backClick(){
      //后退
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.item{
  flex: 1;
}
.active{
  color:var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding-bottom: 2px;
}
.back-img img{
  height: 18px;
  width:18px;
  vertical-align: middle;
}
</style>
