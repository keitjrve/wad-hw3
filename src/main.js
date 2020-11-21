import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from "./components/Home";
import header from "./components/header";
import Login from "./components/Login";
import Browse from "@/components/Browse";
/*import store from "./store";*/

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    {
        path: "/postit",
        name: "header",
        component: header,
        redirect: {
            name: 'home'
        },
        children: [
            {
                path: '',
                component: Home,
                name: 'home'
            },
            {
                path: "/browse",
                name: "browse",
                component: Browse
            }
        ]
    },
    { path: '', name: "login",component: Login },

];

const router = new VueRouter({routes});

new Vue({
    router,
    /*store,*/
    render: h => h(App),
}).$mount('#app')
