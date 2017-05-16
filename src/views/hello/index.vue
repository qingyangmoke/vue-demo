<template src="./index.html"></template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        content: ''
      }
    },
    mounted () { // 生命周期
      this.getContent()
    },
    methods: {
      toWorld () {
//        https://router.vuejs.org/zh-cn/essentials/navigation.html
        this.$router.push({path: 'world', query: {id: 123}})
      },
      getContent () {
        this.$http.get('/api/hello').then(function (data) {
          var json = data.body
          this.content = json
        }, function (response) {
          console.info(response)
        })
      }
    },
    computed: {
      upper () {
        return this.msg.toUpperCase()
      },
      paramId () {
        return ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
