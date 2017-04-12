import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  userName: 'Yoyoyoyoyo',
  pass: 'goatmilk',
  boards: []
}
const mutations = {
  SET_USERNAME: function(state, newVal){
    state.userName = newVal;
  },
  ADD_BOARD: function(state, board){
    state.boards.push(board);
  },
  REMOVE_BOARD: function(state, board){
    state.boards.splice(state.boards.indexOf(board),1)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  strict: process.env.NODE_ENV != 'production'
})
