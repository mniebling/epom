import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import css from './NavBar.module.css'

export default function NavBar () {

	const router = useRouter()

	return (
		<nav className={ css.navBar }>
			<strong className={ css.name }>Esther Pomranky</strong>

			<Link href="/">
				<a className={ classNames('link', { [css.isActive]: router.asPath === '/' }) }>Home</a>
			</Link>

			<Link href="/art">
				<a className={ classNames('link', { [css.isActive]: router.asPath === '/art' }) }>Art</a>
			</Link>

			<Link href="https://www.etsy.com/shop/EstherPomrankyArt" target="_blank">
				<a className='link'>Shop</a>
			</Link>

			<Link href="/about">
				<a className={ classNames('link', { [css.isActive]: router.asPath === '/about' }) }>About</a>
			</Link>
		</nav>
	)
}
