import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from './NavBar.module.css'

export default function NavBar () {

	const router = useRouter()

	return (
		<nav className={ css.navBar }>
			<strong className={ css.name }>Esther Pomranky</strong>

			<Link
				className={ classNames('link', { [css.isActive]: router.asPath === '/' }) }
				href='/'
			>
				Home
			</Link>

			<Link
				className={ classNames('link', { [css.isActive]: router.asPath === '/art' }) }
				href='/art'
			>
				Art
			</Link>

			{/* Not using the shop link right now. */}
			{/* <Link
				className='link'
				href='https://www.etsy.com/shop/EstherPomrankyArt' target='_blank'
			>
				Shop
			</Link> */}

			<Link
				className={ classNames('link', { [css.isActive]: router.asPath === '/about' }) }
				href='/about'
			>
				About
			</Link>
		</nav>
	)
}
