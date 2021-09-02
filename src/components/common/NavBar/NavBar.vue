<template>
<div class="nav-bar">
<!--  在div上设置样式-->
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;/*//可将文字垂直居中显示*/
  box-shadow: 0 1px 1px rgba(100,100,100,0.01)
/*  设置阴影*/
}
.left, .right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>
