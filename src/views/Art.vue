<template lang="pug">
div#art
  div.paintings
    div.painting
      img(src="../assets/purple-finch.jpg")
      div.label Purple Finch
      div.date 2018
    div.painting
      img(src="../assets/cardinal.jpg")
      div.label Cardinal
      div.date 2018
    div.painting
      img(src="../assets/titmouse.jpg")
      div.label Tufted Titmouse
      div.date 2018
    div.painting
      img(src="../assets/bluebird.jpg")
      div.label Bluebird
      div.date 2018
    div.painting
      img(src="../assets/goldfinch.jpg")
      div.label Goldfinch
      div.date 2018
    div.painting
      img(src="../assets/sparrow.jpg")
      div.label Sparrow
      div.date 2018

  div.words
    h2.title About the Birds series
    p
    | When I was a child, I was fascinated by my mother's <em>Birds of North
    | America</em> field guide. She kept it on the top shelf of a bookcase in
    | our living room, but that didn't stop me from pulling it down and flipping
    | through it.
    p
    | I spent a great deal of time looking at birds I recognized (and many I didn't).
    | Occasionally, when we saw a new bird at the feeder or on the locust tree
    | in the back yard, Mom would pull the book down and we'd look together until
    | we identified it.
    p
    | This is undoubtedly a family obsession. During my childhood trips to visit
    | my grandparents in Florida, neither my grandma nor my grandpa ever missed
    | the opportunity to point out the local bird life. It's entirely thanks to
    | my mother and grandparents that I'm able to identify pretty much any bird
    | who hops across the sidewalk.
    p
    | Each of the birds I've painted in this series has a special memory
    | associated with it. The goldfinch and purple finch are regular guests at
    | my Mom's birdfeeders. The sparrow reminds me of the one I rescued from a
    | light fixture and rehabilitated in my laundry room. The first titmouse I
    | spotted was courtesy of my grandma in Michigan one summer. The bluebird is
    | an homage to my grandma, who remains alive in my memory as one of the
    | kindest, most vibrant women I've ever known.
</template>


<script>
export default {
  name: 'Art'
}
</script>


<style scoped>
.title {
  text-align: center;
}

#art {
  line-height: 1.7;
  padding-top: 50px;
  max-width: 500px;
  margin: 0 auto;
}

.paintings {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.painting {
  display: flex;
  flex-direction: column;
  margin: 5px 5px;
  width: 48%;
}

.painting > img {
  max-width: 100%;
  max-height: 100%;
}

.label {
  display: flex;
  line-height: 1.25;
  margin: 5px 0 0 0;
}

.date {
  color: #999;
  font-size: 13px;
  font-style: italic;
}

.words {
  margin: 25px 0;
}

@media (max-width: 500px) {
  .words {
    padding: 0 25px;
  }
}

@media (min-width: 900px) {
  #art {
    display: flex;
    justify-content: center;
    max-width: 90%;
  }

  .paintings {
    justify-content: flex-start;
    margin-bottom: 25px;
    width: 50%;
  }

  .painting {
    margin: 5px 2.5%;
    width: 40%;
  }

  .words {
    margin-top: 0;
    width: 600px;
  }

  .title {
    text-align: left;
  }
}
</style>
