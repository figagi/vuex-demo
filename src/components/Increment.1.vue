<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle({de:5})" />
      <span>{{count}}</span>
      <p>{{num}}</p>
      <input type="button" value="+" @click="addHandle" />
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
      computed: {
        // ...mapGetters({
        //   num2: 'filterCount'
        // }),
        // ...mapState(['count'])
        num(){
          return this.$store.state.count
        }
      }
      ,
      methods: {
        addHandle(){ 
        // 点击的时候需要改变状态,提交mutation addIncrement 
          // 提交的信息相当于这个参数 key值
          this.$store.commit("addIncrement")

        },
        deHandle(){
          this.$store.commit("deIncrement")
        }
        // 可以去谷歌下载一个插件看 vuex 改变的状态
      }

    }
</script>
<style>

</style>
