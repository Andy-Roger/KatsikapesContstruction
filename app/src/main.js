import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
const store = require('./store/store')
console.log(store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
