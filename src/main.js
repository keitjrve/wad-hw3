import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app',
  data: {color: '#673AB7'}
}).$mount('#app')
