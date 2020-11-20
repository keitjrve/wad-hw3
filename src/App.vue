<template>
  <div id="App">
    <Login/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from './components/Login.vue'

  export default {
    name: 'App',
    components: {
      Login
    },
    methods: {

    }
  }
</script>

<style>
    * {
        font-family: 'Roboto Slab', serif;
        outline: none;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    body {
        background-color: #0277bd;
        color: #263238;
    }
</style>
