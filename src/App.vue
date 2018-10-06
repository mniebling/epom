<template>
  <div id="app">
    <h1>Esther Pomranky</h1>
    <p>Chicago-based teaching artist.</p>

    <div class="birds">
      <div class="birds-images">
        <div class="bird-image">
          <img src="./assets/purple-finch.jpg">
        </div>
        <div class="bird-image">
          <img src="./assets/cardinal.jpg">
        </div>
        <div class="bird-image">
          <img src="./assets/titmouse.jpg">
        </div>
        <div class="bird-image">
          <img src="./assets/bluebird.jpg">
        </div>
        <div class="bird-image">
          <img src="./assets/goldfinch.jpg">
        </div>
        <div class="bird-image">
          <img src="./assets/sparrow.jpg">
        </div>
      </div>
      <div class="text">
        <div>Interested in a print from the Birds series?</div>
        <a href="https://goo.gl/forms/QhlJwFtLJwXri9q82">Leave your email</a>
        <span> to be contacted when they're available.</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  components: {}
})
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
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
  width: 33%;
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
