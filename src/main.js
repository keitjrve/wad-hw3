import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from "./components/Home";
/*import store from "./store";*/

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: "/Home", component: Home},

];

const router = new VueRouter({routes});

new Vue({
  router,
  /*store,*/
  render: h => h(App),
}).$mount('#app')
