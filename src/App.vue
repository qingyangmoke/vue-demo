<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">Home</router-link>
      <router-link :to="{ path: '/world',query:{ id: 222 }}">Go to world</router-link>
      <router-link :to="{ path: '/login',query:{ id: 222 }}">login</router-link>
      <router-link :to="{ path: '/vuex',query:{ id: 222 }}">vuex</router-link>
    </p>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to, from)
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style>
  @import "styles/common.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
