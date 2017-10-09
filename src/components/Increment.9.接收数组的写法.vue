<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="deHandle({de:5})" />
      <p>{{count}}</p>
      <input type="button" value="+" @click="addHandle" />
    </div>
  </div>
</template>

<script>
    // import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    import {mapState} from 'vuex'

    export default {
      // computed: {
        // ...mapGetters({
        //   num2: 'filterCount'
        // }),
        // ...mapState(['count'])
        // num(){
        //   return this.$store.state.count
        // },
        // num2(){
        //   return this.$store.getters.filterCount
        // }
      // }


      // 几种不同的写法
      // computed:mapState({
        // num:state => state.count //写法1
        // num: 'count' //写法2
        // num(state){
        //   return state.count + 100
        // }  //写法3
            // count: 'counut'
      // })

      // 如果key和值一样可以写成这种写法
      computed: mapState(['count'])
      ,
      methods: {
        addHandle(){ 
        // 点击的时候需要改变状态,提交mutation addIncrement 
          // 提交的信息相当于这个参数 key值
          // this.$store.commit("addIncrement",5)
          // 当我们提交某个按钮的时候，像后端请求数据，不是立即改变，而是等待一段时间
          // 我们来模拟一下

          // 当点击快了以后，vuex插件里面的记录，不会发生变化，视图里面发生了变化
          // 无论发生什么状况，点击永远是同步的，立即发生变化
            // this.$store.commit("addIncrement",{n:5})
          
          // 触发一个action
          this.$store.dispatch("addAction");

        },
        deHandle(){
          // this.$store.commit("deIncrement",5)
          this.$store.commit({
            type:'deIncrement',
            de:10
          })
        }
        // 可以去谷歌下载一个插件看 vuex 改变的状态
      }

    }
</script>
<style>

</style>
