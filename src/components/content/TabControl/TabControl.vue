<template>
  <div id="TabControl" class="tab-control">
<!--  组件只是文字不一样，可以不用插槽-->
<!--    v-bind绑定class-->
    <div v-for="(item,index) in ctitles" class="tab-control-item"
    :class="{active:index===currentIndex}" @click="changeIndex(index)">
      <span >{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
//  接受传入的title
  props:{
    ctitles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.active{
  color:var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding-bottom: 2px;
}
</style>
