<template>
  <Button v-bind:class="{'like-button': !clicked, 'liked': clicked}" @click ="clicked = !clicked">{{ like.likes }}</Button>
</template>

<script>
export default {
  name: "Like",
  props: ["like"],
  data(){
    return {
      clicked: false,
    }
  },
}
</script>

<style scoped>

.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.liked {
  background-color: #01579b;
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

* {
  font-family: 'Roboto Slab', serif;
  outline: none;
}
</style>