<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/*使用别名来引用文件 --vue.config.js  */
@import 'assets/css/base.css';
</style>
