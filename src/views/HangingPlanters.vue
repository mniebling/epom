<template lang="pug">
div#hanging-planters

  h2.title DIY hanging planter tutorial

  div.step
    div.step-image
      img(src="../assets/hanging-planters/supplies.jpg")
    div.text
      strong Supplies
      p.
        Here are the supplies and tools you'll need for this project. The cost
        of materials listed here comes to about $50-60 but you'll have enough
        for multiple planters.
      p.
        For craft hoops you'll need one that's smaller than the bottom of the
        pot and one that's large enough to accommodate both the pot and foliage.
        I used 2–3″ for the smaller ones and anywhere from 7–12″ for the larger
        rings.
      p.supplies
        a.link(href="https://www.amazon.com/gp/product/B07ND4CNYX") Craft hoops
        a.link(href="https://www.amazon.com/Tenn-Well-Industrial-Decoration-Gardening/dp/B01M0TT9YS") Jute twine
        a.link(href="https://www.amazon.com/Dritz-PRY-653111-653111-Liquid-Multicolor/dp/B0018NA0F8") Liquid Stitch
        a.link(href="https://www.amazon.com/Artistic-34-Gauge-Non-Tarnish-Brass-30-Yards/dp/B004CYFFIC") 34-gauge wire
        a.link(href="https://www.amazon.com/Artistic-20-Gauge-Non-Tarnish-Brass-15-Yards/dp/B000ONF116") 20-gauge wire
        a.link(href="https://www.amazon.com/Wento-Brushed-Carabiner-Trigger-Keyring/dp/B07544P8YH") Round carabiners (2 per planter)
        a.link(href="https://www.amazon.com/Beadsmith-Variety-Plated-Crimp-Beads/dp/B007JMCD6Q") Crimp tube beads


  div.step
    div.step-image
      img(src="../assets/hanging-planters/01.jpg")
    div.text
      strong.number Step 1:
      strong Cover the small craft hoop in jute twine
      p.
        Wrap twine tightly around the smaller craft hoop, then secure the ends
        with Liquid Stitch. Your wrapped hoop should rest flat on the bottom of
        your pot.

  div.step
    div.step-image
      img(src="../assets/hanging-planters/02.jpg")
    div.text
      strong.number Step 2:
      strong Mark where your wires will go
      p.
        Using a pen or thin Sharpie, mark 4 points equidistant from each other on
        the circle.
      p.
        Graph paper makes this easy. Rest your hoop so that each edge is equidistant
        from where two lines cross (in my example, the edges are each four boxes
        away from where the two darker lines meet). Then make a small line where
        each arm of the + crosses the hoop.

  div.step
    div.step-image
      img(src="../assets/hanging-planters/03.jpg")
    div.text
      strong.number Step 3:
      strong Calculate how much wire you'll need
      p.
        Loop the 34-gauge wire around the hoop. Place your pot (preferably with the
        plant inside) on the hoop. Put this near the edge of a table.
      p.
        Hold the larger hoop around your pot as you'd like it to hang when the
        planter is finished. Pull the loose end of the wire up until it touches the
        large loop, then pull it an extra 3 inches or so.
      p.
        Bring the spool of wire up to meet the loose end so that the wire is doubled
        up. Then cut the wire off the spool.

  div.step
    div.step-image
      img(src="../assets/hanging-planters/04.jpg")
    div.text
      strong.number Step 4:
      strong Cut the rest of your hanging wires
      p.
        Use the wire from Step 3 to measure and cut three more pieces of wire.
        Then loop each wire around the small hoop at the marks you made in Step 2.

  div.step
    div.step-image
      img(src="../assets/hanging-planters/05.jpg")
    div.text
      strong.number Step 5:
      strong Create one hanging loop
      p.
        Thread a crimp bead on each set of wires. Rest your pot on the small hoop
        near the edge of a table. Hold the larger hoop around your pot like you
        did in Step 3.
      p.
        Pull the loose ends of the wire up and bend them gently around the large
        hoop where your fingers are holding it.
      p.
        Feed the ends of the wires back down through the crimp bead, then guide
        them up and back down through the crimp bead. Tug to tighten and then
        crimp with pliers.

  div.step
    div.step-image
      img(src="../assets/hanging-planters/06.jpg")
    div.text
      strong.number Step 6:
      strong Create the rest of your hanging loops
      p.
        Measure the total length of the wire from Step 6, from hoop to the top of
        the loop. If the finished wires aren't all the same length, your pot won't
        hang straight!
      p.
        Repeat the process from Step 6 to create loops on the remaining three sets
        of wires.

  div.step
    div.step-image
      img(src="../assets/hanging-planters/07.jpg")
    div.text
      strong.number Step 7:
      strong Thread each loop through the carabiner
      p.
        Pretty easy!

  div.step
    div.step-image
      img(src="../assets/hanging-planters/08.jpg")
    div.text
      strong.number Step 8:
      strong Put the larger hoop on the carabiner
      p.
        This is also pretty easy 😄

  div.step
    div.step-image
      img(src="../assets/hanging-planters/09.jpg")
    div.text
      strong.number Step 9:
      strong Wire it up
      p.
        Run a wire in the desired length from your carabiner up to your hanging
        carabiner. Make a loop on each end for easy removal.
      p.
        You can also clip one plant on to the larger craft hoop of another plant
        hanger. Just be conscious of the weight limit of the carabiners you're using.
      p.
        I hang my plants from a 2″ curtain rod because I like how it looks. The
        opening of the carabiner isn't big enough for me to clip/unclip them from
        the rod, but if I want to rearrange the plants to accommodate new additions
        it's fairly easy for me to unclip the plant from the carabiner and move it
        to another clip.

  div.step
    div.step-image
      img(src="../assets/hanging-planters/done.jpg")
    div.text
      strong All done 🌱🌿🌻
      p.
        Now you can sit back, relax and enjoy your plants!

</template>


<script>
export default {
  name: 'hangingPlanters'
}
</script>


<style scoped lang="postcss">
.title {
  text-align: center;
  margin-bottom: 25px;
}

#hanging-planters {
  line-height: 1.7;
  padding-top: 50px;
  margin: 0 25px 50px 25px;
  max-width: 800px;
}

.supplies {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.supplies > .link {
  margin: 2px 0;
}

.step {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  & .step-image {
    margin: 0 0 20px 0;
    height: 250px;
  }

  & .text {
    border-left: none;
    flex-shrink: 0;
    padding-left: 0;
    width: 450px;
  }

  & p:last-of-type {
    margin-bottom: 25px;
  }

  & img {
    max-height: 100%;
    max-width: 100%;
  }

  & .number {
    margin-right: 4px;
  }
}

@media (min-width: 860px) {
  #hanging-planters {
    margin: 0 auto 50px auto;
    max-width: 800px;
  }

  .step {
    flex-direction: row;
    justify-content: flex-end;

    & .step-image {
      flex-grow: 0;
      margin: 0 20px 0 0;
      max-height: 100%;
    }

    & .text {
      border-left: 1px dotted #999;
      padding-left: 15px;
    }

    & p:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
