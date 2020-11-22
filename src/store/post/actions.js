import axios from "axios"

//Action to get posts list
export function getPosts({ commit }) {
    let url = "https://private-anon-bd6dd4e632-wad20postit.apiary-mock.com/posts";
    axios.get(url).then((response) => {
        commit("setProducts", response.data);
    }).catch(error => {
        console.log(error);
    });
}

export function postDetails({ commit }, id) {
    let url = "https://private-anon-bd6dd4e632-wad20postit.apiary-mock.com/posts";
    axios.get(url, { params: { id: id } }).then((response) => {
        commit("setPost", response.data[0]);
    }).catch(function (error) {
        console.log(error);
    });
}