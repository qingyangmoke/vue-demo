<template src="./index.html"></template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  import * as types from '../../stores/mutation-types'

  export default {
    name: 'vuex',
    data () {
      return {
        msg: 'i  am vue '
      }
    },
    computed: {
      getCount () {
        return this.$store.state.module2.count
      },
      ...mapGetters([
        'evenOrOdd'
      ])
    },
    methods: {
      test () {
//        this.$store.dispatch("",)
        console.log('test')
        console.log('getCount:', this.$store.getters.getCount)
        this.increment(10)
      },
      ...mapActions([
        types.INCREMENT,
        types.DECREMENT
      ])
    }
  }
</script>

<style scoped>
</style>
