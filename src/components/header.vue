<template>
    <header>
        <nav>
            <div class="logo-container">
                <img src="../assets/logo.png" alt="postIt">
            </div>
            <div class="search-container">
                <input type="text" name="search"><button type="button">Search</button>
            </div>
            <div class="avatar-container">
                <img src="../assets/avatar.png" class="avatar" alt="Me">
                <!--
                <ul class="user-info">
                    <p id="name"></p>
                    <p id="epost"></p>
                    <hr>
                    <a href="#" onclick="location.href='browse.html'">Browse</a>
                    <hr>
                    <a href="#" onclick="location.href='login.html'">Log out</a>
                </ul>
                -->
            </div>
        </nav>
    </header>
</template>

<script>
export default {
name: "header"
}
</script>

<style scoped>
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

</style>