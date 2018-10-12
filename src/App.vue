<template lang="pug">
div#app
  h1 Esther Pomranky
  p Chicago-based teaching artist.

  div.menu
    span Teaching
    span Art
    span About

  div.birds
    div.birds-images
      div.birds-image
        img(src="./assets/purple-finch.jpg")
      div.birds-image
        img(src="./assets/cardinal.jpg")
      div.birds-image
        img(src="./assets/titmouse.jpg")
      div.birds-image
        img(src="./assets/bluebird.jpg")
      div.birds-image
        img(src="./assets/goldfinch.jpg")
      div.birds-image
        img(src="./assets/sparrow.jpg")

  div.text
    p Interested in a print from the Birds series?
    a(href="https://goo.gl/forms/QhlJwFtLJwXri9q82") Leave your email
    span to be contacted when they're available.
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  components: {

  }
})
</script>

<style lang="postcss">
body {
  background-color: #fafafa;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  text-align: center;
}

.birds {
  margin-top: 50px;
}

.birds-images {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

.bird-image {
  align-items: center;
  display: flex;
  margin: 5px 5px;
  width: 30%;
}

@media (min-width: 600px) {
  .birds-images {
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 90%;
  }
}

.bird-image > img {
  max-width: 100%;
  max-height: 100%;
}

.text {
  margin-top: 50px;
}
</style>
