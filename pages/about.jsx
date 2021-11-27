import NavBar from '../components/NavBar'
import css from './about.module.css'

export default function About () {

	return (
		<>
			<NavBar />

			<div className={ css.about }>
				<h2 className={ css.title }>About Esther</h2>
				<p>
					I am a full-time teaching artist at Alphonsus Academy and Center for the Arts,
					where I strive to inspire a love of art and artmaking in children from ages
					3 to 14. I have been teaching art in the Archdiocese of Chicago for the past
					twelve years, and completed a Master's degree in Art Education in 2013.
				</p>

				<p>
					While I love painting alone in my studio, I also love the challenge and the
					excitement of teaching elementary school. It's a deeply fulfilling profession
					and I've found that it has made me a better, more thoughtful artist.
				</p>
			</div>
		</>
	)
}
