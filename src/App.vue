<template lang="pug">
div#app
  router-view(name="header")
  router-view(name="content")
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'app'
})
</script>

<style lang="postcss">
body {
  background-color: #fafafa;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
