<template lang="pug">
div#nav
  router-link.link(to="/") Home
  router-link.link(to="/teaching") Teaching
  router-link.link(to="/art") Art
  router-link.link(to="/about") About
</template>


<script>
export default {
  name: 'NavBar'
}
</script>


<style scoped>
#nav {
  background-color: white;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  width: 100%;
}

.link,
.link.router-link-active {
  color: green;
  padding: 0 15px;
}

.link.router-link-exact-active {
  color: black;
  text-decoration: none;
}
</style>
