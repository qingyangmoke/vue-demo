<template src="./index.html"></template>

<script>
  export default {
    name: 'world',
    data () {
      return {
        msg: 'i  am world'
      }
    },
    methods: {
      back () {
        // 在浏览器记录中前进一步，等同于 history.forward()
        // router.go(1)
        // 后退一步记录，等同于 history.back()
        // router.go(-1)
        this.$router.go(-1)
      },
      queryeid () {
        return this.$route.query.id || this.$route.params.id
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
  h2 {
    color: red;
  }
</style>
