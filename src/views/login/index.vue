<template src="./index.html"></template>

<script>
  import Vue from 'vue'
  import Toast from 'vue-easy-toast'
  import draggableHeaderView from '@/components/DraggableHeaderView'
  Vue.use(Toast)
  export default {
    name: 'login',
    data () {
      return {
        msg: 'login page',
        title: '可拖动标题'
      }
    },
    components: {
      'drag-view': draggableHeaderView
    },
    methods: {
      back () {
        // 在浏览器记录中前进一步，等同于 history.forward()
        // router.go(1)
        // 后退一步记录，等同于 history.back()
        // router.go(-1)
        this.$router.go(-1)
      },
      toast () {
        Vue.toast('Can I have everybody`s attention?', {
          className: 'et-warn',
          horizontalPosition: 'right',
          duration: 2000
        })
      }
    },
    computed: {
      upper () {
        return this.msg.toUpperCase()
      }
    }
  }
</script>

<style scoped>
</style>
