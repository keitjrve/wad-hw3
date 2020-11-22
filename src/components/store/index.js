import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    posts: [],
    user: {},
    users: []
}
const getters = {}
const actions = {
    getPosts({ commit }){
        axios.get('https://private-anon-fa65eb219a-wad20postit.apiary-mock.com/posts').then(response => {
            commit('SET_POSTS', response.data)
        })
    },
    getUser({ commit }){
        axios.get('https://private-anon-fa65eb219a-wad20postit.apiary-mock.com/users/1').then(response => {
             commit('SET_USER', response.data)
        })
    },
    getUsers({ commit }){
        axios.get('https://private-anon-fa65eb219a-wad20postit.apiary-mock.com/profiles').then(response => {
            commit('SET_USERS', response.data)
        })
    }
}
const mutations = {
    SET_POSTS(state, posts){
        state.posts = posts
    },
    SET_USER(state, user){
        state.user = user
    },
    SET_USERS(state, users){
        state.users = users
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})