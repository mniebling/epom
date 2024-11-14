import NavBar from '../components/NavBar'
import css from './about.module.css'

export default function About () {

	return (
		<>
			<NavBar />

			<div className={ css.about }>
				<h2 className={ css.title }>About Esther</h2>
				<p>
					From an early age I have identified as an artist. And while I love painting
					and making art on my own, I also love the challenge and the excitement
					of guiding others in the artmaking process. For sixteen years I worked
					as a teaching artist in Chicago, inspiring a love of art and artmaking
					in children from ages 3 to 14. It gave me the opportunity to tinker with
					new ideas and techniques, learning and experimenting alongside my students.
					Teaching is a deeply fulfilling profession and I've found that it has made
					me a better, more thoughtful artist.
				</p>

				<p>
					While I learned a great deal from my teachers and colleagues, I found myself
					eager to learn from fellow art teachers. To that end, I earned a Master's
					degree in Art Education in 2013, and during that process tried painting
					with oils for the first time.
				</p>

				<p>
					Just before my son was born we moved to a house with a small yard. With
					a new baby and limited social activities thanks to COVID, we began spending
					a great deal of time outdoors. So my self-identity evolved from “artist” and
					“teacher” to include “mother” and “gardener.” Always an avid reader and
					learner, I enrolled in the Illinois Gardener training through the University
					of Illinois Extension program so that I could work more purposefully in
					my own tiny patch of earth.
				</p>

				<p>
					Digging is a very different skill from wielding a brush, but I enjoy the
					physicality of garden labor. And really, cultivating a garden is not so
					different from painting–a splash of warm colors with a cool color for contrast,
					feathery-textured leaves next to smooth. It’s also like sculpture–tall
					vertical grasses against a low mound of lavender. The unique challenge of
					gardening is that it’s constantly changing. The spring garden is quite different
					from the summer or fall garden, and an established garden bears little resemblance
					to a newly-planted garden. And like a garden, life is all the more beautiful
					because it, too, has seasons.
				</p>

				<p>
					Painting is a quieter activity, but no less rewarding. There is so much
					sadness in the world, but there is also beauty and joy. Through my paintings,
					I try to distill that joy: to capture the magic and the wonder of the natural
					world that I feel when I’m walking in the forest or digging in my garden.
				</p>
			</div>
		</>
	)
}
