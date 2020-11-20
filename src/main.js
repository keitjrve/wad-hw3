import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//import header from "./components/header";
import Home from "./components/Home";
import header from "./components/header";
/*import store from "./store";*/

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/header",
        name: "header",
        component: header
    }
];

const router = new VueRouter({routes});

new Vue({
    router,
    /*store,*/
    render: h => h(App),
}).$mount('#app')
