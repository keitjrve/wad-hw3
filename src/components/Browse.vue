<template>
  <section class="main-container">
    <div class="flexBox">
      <div class="users">
        <div class = "user" v-for="user in users" :key="user.id">
          <img alt="avatar" :src="user.avatar"/>
          <h3 class = "name">{{ user.firstname + " " + user.lastname }}</h3>
          <div class="user-actions">
            <Follow/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import Follow from "@/components/Follow";
export default {
  name: "Browse",
  components: {
    Follow,
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch("getUsers");
    let clicked = false;

    $(document).on("click", '.follow-button', function () {
      if (clicked) {
        $(this).css('background-color', '#590f6d');
        $(this).css('color', '#ffffff')
        $(this).text("Follow");
        clicked = false
      } else {
        $(this).css('background-color', '#ffffff')
        $(this).css('border', '2px solid purple')
        $(this).css('color', '#590f6d')
        $(this).text("Followed");
        clicked = true
      }
    })
  }
}
</script>

<style scoped>
  .flexBox {
    display: flex;
    justify-content: center;
  }

  .name {
    text-align: center;
  }



  .user img {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 30px;
    padding-bottom: 10px;
  }

  .user {
    width: 100%;
    height: auto;
    margin: 5%;
    box-shadow: 0 0 10px rgba(74, 87, 95, 0.33);
    border-radius: 10px;
    display: inline-block;
    max-width: 220px;
  }

  .main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
  }

  .users {
    text-align:center;
  }
</style>