<template lang="pug">
div#home
  h1 Esther Pomranky
  p Chicago-based teaching artist.

  div.menu
    router-link.link(to="/art") Art
    a.link(
      href="https://www.etsy.com/shop/EstherPomrankyArt"
      target="_blank"
    ) Shop
    a.youtube.icon.link(
      href="https://www.youtube.com/channel/UCiV2K5Ni2qZSmBaGwv8G49w"
      target="_blank"
    ) YouTube
    a.instagram.icon.link(
      href="https://www.instagram.com/epomrankyart"
      target="_blank"
    ) Instagram
    router-link.link(to="/about") About

  div.birds
    div.birds-images
      div.bird-image
        img(src="../assets/baltimore-oriole.jpg")
      div.bird-image
        img(src="../assets/barn-swallow.jpg")
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

    h2 Projects
    div.other-stuff
      router-link.link(to="/diy-hanging-planters") DIY hanging planter tutorial
</template>


<script>
export default {
  name: 'Home'
}
</script>


<style lang="postcss">
#home {
  margin-top: 30px;
  text-align: center;
}

.menu {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.link,
.link.router-link-active,
.link:visited {
  color: green;
}

.icon.link::before {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 14px;
  content: '';
  height: 14px;
  margin: 0 4px -3px 0;
  width: 14px;

  @media (min-width: 560px) {
    display: inline-block;
  }
}

.instagram.icon.link::before {
  background-image: url('../assets/instagram.svg');
}

.youtube.icon.link::before {
  background-image: url('../assets/youtube.svg');
}

.menu > .link {
  padding: 0 15px;
}

.birds {
  margin-top: 50px;
}

.birds-images {
  column-gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  margin: 0 auto 50px auto;
  row-gap: 10px;
  width: 90%;
}

.bird-image {
  align-items: flex-start; /* Fix intrinsic height of contents in Safari */
  display: flex; /* Fix whitespace after image */
}

.bird-image > img {
  height: 100%;
  width: 100%;
}

@media (min-width: 700px) {
  .birds-images {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .birds-images {
    width: 75%;
  }
}

.other-stuff {
  margin: 15px 0 50px 0;
}

</style>
