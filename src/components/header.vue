<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="../assets/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search">
        <button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img src="../assets/avatar.png" class="avatar" alt="Me" onclick="toggle">
        <ul class="user-info">
            <p id="name"></p>
            <p id="epost"></p>
            <hr>
            <a href="#" onclick="location.href='browse.html'">Browse</a>
            <hr>
            <a href="#" onclick="location.href='login.html'">Log out</a>
        </ul>
        <router-view></router-view>
      </div>
    </nav>
  </header>
</template>

<script>
import $ from 'jquery'
export default {
    name: "header",
    mounted(){
        $(document).ready(function () {
            $(document).on("click", function (event) {
                if (!$('.user-info').is(":hidden")) {
                    var target = $(event.target)
                    const $trigger = $(".avatar");
                    if (!$trigger.is(target) && !target.is($('.user-info')) && target.parents('.user-info').length !== 1) {
                        $('.user-info').slideUp("fast");
                    }

                }
            });
            $("body").on('click', '.avatar', function () {
                $(".user-info").slideToggle("fast");
            });
        });
    }
}
</script>

<style scoped>

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}


header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

nav:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}

.user-info{
    display: none;
    list-style: none;
    position: absolute;
    margin-top: -3px;
    padding-left: 15px;
    right: 0;
    height: 175px;
    width: 250px;
    background-color: white;
    text-align: left;
}

.user-info li{
    display:block;
    float: left;
}

.user-info a{
    font-weight: bold;
}

.user-info hr{
    margin: 10px 0 10px -15px;
}

</style>