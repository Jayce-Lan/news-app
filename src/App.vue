<template>
  <div id="app">
    <Header />
    <div class="container">
      <!-- 通过不同的访问路径渲染不同的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from '@/views/Home';
import Header from '@/components/Header';


export default {
  components: {
    //注册组件
    // Home,  //由于Home组件不一定能够被渲染，所以使用vue-router完成各组件的渲染
    Header
  },
}
</script>

<style scoped>
  .container {
    margin: 30px auto;
  }
</style>