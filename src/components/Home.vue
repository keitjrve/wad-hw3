<template>
  <section class="main-container">
    <div v-for="post in posts" :key="post.id">
        <div class="post">
            <div class="post-author">
                <span class="post-author-info">
                    <img alt="Author avatar" :src="post.author.avatar"/>
                    <small>{{ post.author.firstname + " " + post.author.lastname}}</small>
                </span>
                <small>{{ post.createTime }}</small>
            </div>
            <div class="post-image" v-if="post.media != null">
                <div v-if="post.media.type === 'image'">
                    <img :src="post.media.url"/>
                </div>
                <div v-if="post.media.type === 'video'">
                    <iframe :src="post.media.url"/>
                </div>
            </div>
            <div class="post-title">
                <div v-if="post.text != null">
                    <h3>{{ post.text }}</h3>
                </div>
            </div>
            <div class="post-actions">
                <button type="button" name="like" class="like-button">{{ post.likes }}</button>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'Home',
  computed: {
    ...mapGetters("post", ["posts"]),
  },
  methods: {
      ...mapActions("post", ["getPosts"]),
  },
  mounted(){
      this.getPosts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.add-to-cart {
  padding: 10px;
  color: #ffffff;
  background-color: #455a64;
  border: 1px solid #35444d;
  border-radius: 3px;
}

.add-to-cart:hover {
  cursor: pointer;
  border: 1px solid #455a64;
}

.remove-from-cart {
  padding: 10px;
  color: #ffffff;
  background-color: #642027;
  border: 1px solid #341114;
  border-radius: 3px;
}

.remove-from-cart:hover {
  cursor: pointer;
  border: 1px solid #642027;
}



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
