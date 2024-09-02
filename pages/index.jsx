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
				<div className={ css.subheader }>Chicago-based teaching artist & gardener.</div>

				<div className={ css.links }>
					<Link className='link' href='/art'>
						Art
					</Link>
					{/* Not using the Etsy shop right now. */}
					{/* <Link className='link' href='https://www.etsy.com/shop/EstherPomrankyArt'>
						Shop
					</Link> */}
					<Link
						className={ classNames('link', css.icon, css.youtube) }
						href='https://www.youtube.com/channel/UCiV2K5Ni2qZSmBaGwv8G49w'
					>
						YouTube
					</Link>
					<Link
						className={ classNames('link', css.icon, css.instagram) }
						href='https://www.instagram.com/epomrankyart'
					>
						Instagram
					</Link>
					<Link className='link' href='/about'>
						About
					</Link>
				</div>
			</div>

			<div className={ css.paintings }>
				<div className={ css.paintingCell }>
					<Image
						alt='Painting of a Blue Jay'
						className={ css.painting }
						src={ images.blueJay }
					/>
				</div>
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
						alt='Painting of a Sparrow'
						className={ css.painting }
						src={ images.sparrow }
					/>
				</div>
			</div>

			<div className={ css.projects }>
				<h2 className={ css.projectsHeader }>Projects</h2>

				<Link className='link' href='/diy-hanging-planters'>
					DIY hanging planter tutorial
				</Link>
			</div>
		</>
	)
}
