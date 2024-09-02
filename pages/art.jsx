import Image from 'next/image'
import NavBar from '../components/NavBar'
import * as images from '../public/paintings'
import css from './art.module.css'

export default function Art () {

	return (
		<>
			<NavBar />

			<div className={ css.artPage }>
				<div className={ css.paintings }>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Blue Jay'
							className={ css.painting }
							priority
							src={ images.blueJay }
						/>
						<div className={ css.title }>Blue Jay</div>
						<div className={ css.date }>2019 • 8×10″ • $400</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Barn Swallow'
							className={ css.painting }
							src={ images.barnSwallow }
						/>
						<div className={ css.title }>Barn Swallow</div>
						<div className={ css.date }>2019 • 8×10″ • Sold</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Baltimore Oriole'
							className={ css.painting }
							src={ images.baltimoreOriole }
						/>
						<div className={ css.title }>Baltimore Oriole</div>
						<div className={ css.date }>2019 • 8×10″ • Sold</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Purple Finch'
							className={ css.painting }
							src={ images.purpleFinch }
						/>
						<div className={ css.title }>Purple Finch</div>
						<div className={ css.date }>2018 • 8×10″ • Sold</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Cardinal'
							className={ css.painting }
							src={ images.cardinal }
						/>
						<div className={ css.title }>Cardinal</div>
						<div className={ css.date }>2018 • 8×10″ • Sold</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Tufted Titmouse'
							className={ css.painting }
							src={ images.titmouse }
						/>
						<div className={ css.title }>Tufted Titmouse</div>
						<div className={ css.date }>2018 • 8×10″ • $300</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Bluebird'
							className={ css.painting }
							src={ images.bluebird }
						/>
						<div className={ css.title }>Bluebird</div>
						<div className={ css.date }>2018 • 8×10″ • Sold</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Sparrow'
							className={ css.painting }
							src={ images.sparrow }
						/>
						<div className={ css.title }>Sparrow</div>
						<div className={ css.date }>2018 • 8×10″ • $300</div>
					</div>

					<div className={ css.paintingCell }>
						<Image
							alt='Painting of a Goldfinch'
							className={ css.painting }
							src={ images.goldfinch }
						/>
						<div className={ css.title }>Goldfinch</div>
						<div className={ css.date }>2018 • 8×10″ • $200</div>
					</div>

				</div>

				<div className={ css.words }>
					<h2 className={ css.wordsHeader }>About the Birds series</h2>
					<p>
						When I was a child, I was fascinated by my mother's <em>Birds of North
						America</em> field guide. She kept it on the top shelf of a bookcase in
						our living room, but that didn't stop me from pulling it down and flipping
						through it.
					</p>
					<p>
						I spent a great deal of time looking at birds I recognized (and many I didn't).
						Occasionally, when we saw a new bird at the feeder or on the locust tree
						in the back yard, Mom would pull the book down and we'd look together until
						we identified it.
					</p>
					<p>
						This is undoubtedly a family obsession. During my childhood trips to visit
						my grandparents in Florida, neither my grandma nor my grandpa ever missed
						the opportunity to point out the local bird life. It's entirely thanks to
						my mother and grandparents that I'm able to identify pretty much any bird
						who hops across the sidewalk.
					</p>
					<p>
						Each of the birds I've painted in this series has a special memory
						associated with it. The goldfinch and purple finch are regular guests at
						my Mom's birdfeeders. The sparrow reminds me of the one I rescued from a
						light fixture and rehabilitated in my laundry room. The first titmouse I
						spotted was courtesy of my grandma in Michigan one summer. The bluebird is
						an homage to my grandma, who remains alive in my memory as one of the
						kindest, most vibrant women I've ever known.
					</p>
				</div>

			</div>
		</>
	)
}
