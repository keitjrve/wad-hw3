import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    posts: [],
    user: {}
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
    }
}
const mutations = {
    SET_POSTS(state, posts){
        state.posts = posts
    },
    SET_USER(state, user){
        state.user = user
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})