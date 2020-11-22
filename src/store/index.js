import Vuex from 'vuex'
import Vue from 'vue'
import post from './post'
//import user from './user'

Vue.use(Vuex)
export default function () {
    const Store = new Vuex.Store({
        modules: {
            post,
            //user
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
    })
    return Store
}

/*
Vue.use(Vuex);

const state = {
    posts: [],
    users: [],
    loggedIn: []
}

const getters = {}

const actions = {
   getPosts({commit}) {
       axios.get('https://private-anon-bd07188f71-wad20postit.apiary-mock.com/posts').then(response => {
           commit('SET_POSTS', response.data)
       })
   },
   getUsers({commit}){
       axios.get('https://private-anon-70efa6a1a7-wad20postit.apiary-mock.com/profiles').then(response => {
           commit('SET_USERS', response.data)
       })
   },
   getLoggedUser({commit}){
       axios.get('https://private-anon-aee74b6ac8-wad20postit.apiary-mock.com/users/1').then(response => {
           commit('SET_LOGGEDIN', response.data)
       })
   }
}

const mutations = {
    SET_POSTS(state, posts){
        state.posts = posts
    },
    SET_USERS(state, users){
        state.users = users
    },
    SET_LOGGEDIN(state, loggedIn){
        state.loggedIn = loggedIn
    }
}
 */
/*
export default new Vuex.store({
    state,
    getters,
    actions,
    mutations
})

 */

