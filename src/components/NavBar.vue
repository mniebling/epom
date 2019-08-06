<template lang="pug">
div#nav
  strong.name Esther Pomranky
  router-link.link(to="/") Home
  router-link.link(to="/art") Art
  a.link(
    href="https://www.etsy.com/shop/EstherPomrankyArt"
    target="_blank"
  ) Shop
  //- router-link.link(to="/teaching") Teaching
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
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  width: 100%;
}

.name {
  padding: 0 10px 0 10px;
}

.link,
.link.router-link-active {
  color: green;
  padding: 0 10px;
}

@media (min-width: 400px) {
  .name, .link, .link.router-link-active {
    padding: 0 15px 0 15px;
  }
}

.link.router-link-exact-active {
  color: black;
  text-decoration: none;
}
</style>
