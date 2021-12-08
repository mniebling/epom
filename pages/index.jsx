import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import * as images from '../public/paintings'
import css from './index.module.css'


export default function IndexPage () {

	return (
		<>
			<div className={ css.header }>
				<h1>Esther Pomranky</h1>
				<div className={ css.subheader }>Chicago-based teaching artist.</div>

				<div className={ css.links }>
					<Link href='/art'>
						<a className='link'>Art</a>
					</Link>
					<Link href='https://www.etsy.com/shop/EstherPomrankyArt'>
						<a className='link'>Shop</a>
					</Link>
					<Link href='https://www.youtube.com/channel/UCiV2K5Ni2qZSmBaGwv8G49w'>
						<a className={ classNames('link', css.icon, css.youtube) }>
							YouTube
						</a>
					</Link>
					<Link href='https://www.instagram.com/epomrankyart'>
						<a className={ classNames('link', css.icon, css.instagram) }>Instagram</a>
					</Link>
					<Link href='/about'>
						<a className='link'>About</a>
					</Link>
				</div>
			</div>

			<div className={ css.paintings }>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Baltimore Oriole'
						className={ css.painting }
						src={ images.baltimoreOriole }
					/>
				</div>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Barn Swallow'
						className={ css.painting }
						src={ images.barnSwallow }
					/>
				</div>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Purple Finch'
						className={ css.painting }
						src={ images.purpleFinch }
					/>
				</div>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Cardinal'
						className={ css.painting }
						src={ images.cardinal }
					/>
				</div>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Tufted Titmouse'
						className={ css.painting }
						src={ images.titmouse }
					/>
				</div>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Bluebird'
						className={ css.painting }
						src={ images.bluebird }
					/>
				</div>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Goldfinch'
						className={ css.painting }
						src={ images.goldfinch }
					/>
				</div>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Sparrow'
						className={ css.painting }
						src={ images.sparrow }
					/>
				</div>
			</div>

			<div className={ css.projects }>
				<h2 className={ css.projectsHeader }>Projects</h2>

				<Link href='/diy-hanging-planters'>
					<a className='link'>DIY hanging planter tutorial</a>
				</Link>
			</div>
		</>
	)
}
