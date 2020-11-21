<template>
  <body>
  <section class="main-container">
    <div class="post">
      <div class="post-author">
          <span class="post-author-info">
            <img src="res/images/avatar.png" alt="Post author">
            <small>John Doe</small>
          </span>
        <small>Sep 18, 2020 15:16</small>
      </div>
      <div class="post-image">
        <img src="res/images/posts/1.jpg" alt="">
      </div>
      <div class="post-title">
        <h3>I think it's going to rain</h3>
      </div>
      <div class="post-actions">
        <button type="button" name="like" class="like-button">100k</button>
      </div>
    </div>

    <div class="post">
      <div class="post-author">
          <span class="post-author-info">
            <img src="res/images/avatar.png" alt="Post author">
            <small>John Doe</small>
          </span>
        <small>Sep 18, 2020 15:16</small>
      </div>
      <div class="post-title">
        <h3>Which weighs more, a pound of feathers or a pound of bricks?</h3>
      </div>
      <div class="post-actions">
        <button type="button" name="like" class="like-button">15k</button>
      </div>
    </div>

    <div class="post">
      <div class="post-author">
          <span class="post-author-info">
            <img src="res/images/avatar.png" alt="Post author">
            <small>John Doe</small>
          </span>
        <small>Sep 18, 2020 17:18</small>
      </div>
      <div class="post-image">
        <img src="res/images/posts/2.jpg" alt="">
      </div>
      <div class="post-title">
        <h3>Felt cute, might delete later</h3>
      </div>
      <div class="post-actions">
        <button type="button" name="like" class="like-button liked">10k</button>
      </div>
    </div>

  </section>
  </body>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

a {
  color: #40c4ff;
}

.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-container {
  background-image: url(../assets/avatar.png);
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: 15px 15px;
  min-width: 25%;
  padding: 45px 45px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  text-align: center;
}

#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
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

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}

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

.like-button.liked {
  background-color: #01579b;
}


</style>
