import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import index from "./components/index";
import store from "./store";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: "/index", component: index},
];

const router = new VueRouter({routes});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
