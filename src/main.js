import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import index from "./components/index";

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: "/index", component: index},
];

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
