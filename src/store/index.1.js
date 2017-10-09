import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectModule = {
  state:{
    title:'hello123',
    list: []
  },
  mutations:{
    changeTitle(state, payload){
      state.title = payload.title
    },
    changeList(state, list){
      state.list = list;
    }
  },
  actions:{
    getListAction({commit}){
      // 发送请求
      axios.get('http://easy-mock.com/mock/594f5d4b9adc231f3569be76/list/list')
        .then((data)=>{
          commit("changeList", data.data);  // 拿到数据后，提交mutations，改变状态
        })
        .catch((error)=>{
          conso.log(error)
        })
    }
  }
};

// this.$store.state.title
// this.$store.state.selectModule.title

// 定义一个容器

// let store = new Vuex.Store({
//     state: {
//       count: 100
//     },
//     getters: {
//       filterCount(state){
//         return state.count >= 120 ? 120 : state.count;
//       }
//     },
//     mutations: {
//        addIncrement(state, payload){
//          state.count += payload.n;
//        },
//       deIncrement(state, payload){
//         state.count -= payload.de;
//       }
//     },
//    actions: {
//       addAction({commit,dispatch}){
//         setTimeout(()=>{
//             // 改变状态，提交mutations
//             commit("addIncrement", {n:5})
//             dispatch("textAction", {test: '测试'})
//         },1000)
//       },
//     textAction(context, obj){
//         console.log(obj)
//     }
//   },
//     modules:{
//       selectModule
//     }
// })

// 版本1
// 定义一个容器
// 一个页面中只有一个容器
// 状态存储是响应式的
// 当我数据发生改变的时候，使用状态其它立马更新
let store = new Vuex.Store({
  state:{
    // 把应用的状态都放在这里
    count:100
  },
  mutations:{
    // 里面定义n多个函数，当触发这个函数就会改变state状态
      addIncrement(state){  //需要在前面提交一个mutaions才会触发  触发后这个函数就会执行 类似于一个事件，对应事件处理函数
          // 接收一个state作为参数，相当于上面的state
         state.count += 1;
      },
      deIncrement(state, payload){
        state.count -= 1;
      }
  }
})
export default store

