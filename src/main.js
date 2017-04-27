
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import swiper from 'swiper'


Vue.config.productionTip = false
Vue.use(resource);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
