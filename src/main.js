import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'
import './style/common.scss';

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})