<template>
  <Button v-bind:class="{'follow': !clicked, 'followed': clicked}" @click ="clicked = !clicked">
    <span v-if="!clicked">Follow</span>
    <span v-if="clicked">Followed</span>
  </Button>
</template>

<script>
export default {
  name: "Follow",
  data(){
    return {
      clicked: false,
    }
  },
}
</script>

<style scoped>
.follow {
  background-color: #590f6d;
  color: white;
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
  width: 40%;
  height: 30px;
  margin: 4px 0;
  border-radius: 4px;

}

.followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
  width: 40%;
  height: 30px;
  margin: 4px 0;
  border-radius: 4px;
}

</style>