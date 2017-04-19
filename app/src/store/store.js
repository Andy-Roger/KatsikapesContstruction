import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  userName: 'Yoyoyoyoyo',

  counter: 0
}
const mutations = {
  SET_USERNAME: function(state, newVal){
    state.userName = newVal;
  },

  INCREMENT: function(state, counter){
    state.counter + 1
  }
}

export default new Vuex.Store({
  state,
  mutations,
  strict: process.env.NODE_ENV != 'production'
})
