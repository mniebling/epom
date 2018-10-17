<template lang="pug">
div#home
  h1 Esther Pomranky
  p Chicago-based teaching artist.

  div.menu
    router-link.link(to="/teaching") Teaching
    router-link.link(to="/art") Art
    router-link.link(to="/about") About

  div.birds
    div.birds-images
      div.bird-image
        img(src="../assets/purple-finch.jpg")
      div.bird-image
        img(src="../assets/cardinal.jpg")
      div.bird-image
        img(src="../assets/titmouse.jpg")
      div.bird-image
        img(src="../assets/bluebird.jpg")
      div.bird-image
        img(src="../assets/goldfinch.jpg")
      div.bird-image
        img(src="../assets/sparrow.jpg")

  div.text
    p Interested in a print from the Birds series?
    a.link(href="https://goo.gl/forms/QhlJwFtLJwXri9q82") Leave your email
    span &nbsp;to be contacted when they're available.
</template>


<script>
export default {
  name: 'Home'
}
</script>


<style>
#home {
  margin-top: 30px;
  text-align: center;
}

.menu {
  display: flex;
  justify-content: center;
}

.link,
.link.router-link-active,
.link:visited {
  color: green;
}

.menu > .link {
  padding: 0 15px;
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
