import classNames from 'classnames'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import css from './diy-hanging-planters.module.css'

import * as images from '../public/hanging-planters'


export default function DIYHangingPlanters () {

	return (
		<>
			<NavBar />

			<div className={ css.plantersPage }>

				<h2 className={ css.title }>DIY hanging planter tutorial</h2>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.supplies } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong>Supplies</strong>
						<p className={ css.paragraph }>
							Here are the supplies and tools you'll need for this project. The cost
							of materials listed here comes to about $50–60 but you'll have enough
							for multiple planters.
						</p>
						<p className={ css.paragraph }>
							For craft hoops you'll need one that's smaller than the bottom of the
							pot and one that's large enough to accommodate both the pot and foliage.
							I used 2–3″ for the smaller ones and anywhere from 7–12″ for the larger
							rings.
						</p>
						<p className={ classNames(css.supplies, css.paragraph) }>
							<a className='link' href="https://www.amazon.com/gp/product/B07ND4CNYX">Craft hoops</a>
							<a className='link' href="https://www.amazon.com/Tenn-Well-Industrial-Decoration-Gardening/dp/B01M0TT9YS">Jute twine</a>
							<a className='link' href="https://www.amazon.com/Dritz-PRY-653111-653111-Liquid-Multicolor/dp/B0018NA0F8">Liquid Stitch</a>
							<a className='link' href="https://www.amazon.com/Artistic-34-Gauge-Non-Tarnish-Brass-30-Yards/dp/B004CYFFIC">34-gauge wire</a>
							<a className='link' href="https://www.amazon.com/Artistic-20-Gauge-Non-Tarnish-Brass-15-Yards/dp/B000ONF116">20-gauge wire</a>
							<a className='link' href="https://www.amazon.com/Wento-Brushed-Carabiner-Trigger-Keyring/dp/B07544P8YH">Round carabiners (2 per planter)</a>
							<a className='link' href="https://www.amazon.com/Beadsmith-Variety-Plated-Crimp-Beads/dp/B007JMCD6Q">Crimp tube beads</a>
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step01 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 1:</strong>
						<strong>Cover the small craft hoop in jute twine</strong>
						<p className={ css.paragraph }>
							Wrap twine tightly around the smaller craft hoop, then secure the ends
							with Liquid Stitch. Your wrapped hoop should rest flat on the bottom of
							your pot.
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step02 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 2:</strong>
						<strong>Mark where your wires will go</strong>
						<p className={ css.paragraph }>
							Using a pen or thin Sharpie, mark 4 points equidistant from each other on
							the circle.
						</p>
						<p className={ css.paragraph }>
							Graph paper makes this easy. Rest your hoop so that each edge is equidistant
							from where two lines cross (in my example, the edges are each four boxes
							away from where the two darker lines meet). Then make a small line where
							each arm of the + crosses the hoop.
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step03 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 3:</strong>
						<strong>Calculate how much wire you'll need</strong>
						<p className={ css.paragraph }>
							Loop the 34-gauge wire around the hoop. Place your pot (preferably with the
							plant inside) on the hoop. Put this near the edge of a table.
      			</p>
						<p className={ css.paragraph }>
							Hold the larger hoop around your pot as you'd like it to hang when the
							planter is finished. Pull the loose end of the wire up until it touches the
							large loop, then pull it an extra 3 inches or so.
						</p>
						<p className={ css.paragraph }>
							Bring the spool of wire up to meet the loose end so that the wire is doubled
							up. Then cut the wire off the spool.
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step04 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 4:</strong>
						<strong>Cut the rest of your hanging wires</strong>
						<p className={ css.paragraph }>
							Use the wire from Step 3 to measure and cut three more pieces of wire.
        			Then loop each wire around the small hoop at the marks you made in Step 2.
      			</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step05 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 5:</strong>
						<strong>Create one hanging loop</strong>
						<p className={ css.paragraph }>
							Thread a crimp bead on each set of wires. Rest your pot on the small hoop
							near the edge of a table. Hold the larger hoop around your pot like you
							did in Step 3.
						</p>
						<p className={ css.paragraph }>
							Pull the loose ends of the wire up and bend them gently around the large
							hoop where your fingers are holding it.
						</p>
						<p className={ css.paragraph }>
							Feed the ends of the wires back down through the crimp bead, then guide
							them up and back down through the crimp bead. Tug to tighten and then
							crimp with pliers.
      			</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step06 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 6:</strong>
						<strong>Create the rest of your hanging loops</strong>
						<p className={ css.paragraph }>
							Measure the total length of the wire from Step 6, from hoop to the
							top of the loop. If the finished wires aren't all the same length,
							your pot won't hang straight!
						</p>
						<p className={ css.paragraph }>
							Repeat the process from Step 6 to create loops on the remaining
							three sets of wires.
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step07 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 7:</strong>
						<strong>Thread each loop through the carabiner</strong>
						<p className={ css.paragraph }>
							Pretty easy!
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step08 } className={ css.stepImage } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 8:</strong>
						<strong>Put the larger hoop on the carabiner</strong>
						<p className={ css.paragraph }>
							This is also pretty easy 😄
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.step09 } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong className={ css.stepNumber }>Step 9:</strong>
						<strong>Wire it up</strong>
						<p className={ css.paragraph }>
							Run a wire in the desired length from your carabiner up to your
							hanging carabiner. Make a loop on each end for easy removal.
						</p>
						<p className={ css.paragraph }>
							You can also clip one plant on to the larger craft hoop of another
							plant hanger. Just be conscious of the weight limit of the
							carabiners you're using.
						</p>
						<p className={ css.paragraph }>
							I hang my plants from a 2″ curtain rod because I like how it looks.
							The opening of the carabiner isn't big enough for me to clip/unclip
							them from the rod, but if I want to rearrange the plants to
							accommodate new additions it's fairly easy for me to unclip the
							plant from the carabiner and move it to another clip.
						</p>
					</div>
				</div>

				<div className={ css.step }>
					<div className={ css.stepImageContainer }>
						<Image src={ images.done } className={ css.stepImage } layout='fill' />
					</div>
					<div className={ css.stepText }>
						<strong>All done 🌱🌿🌻</strong>
						<p className={ css.paragraph }>
							Now you can sit back, relax and enjoy your plants!
						</p>
					</div>
				</div>

			</div>
		</>
	)
}
