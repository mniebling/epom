import css from './voronoi.module.css'
import { Delaunay } from 'd3-delaunay'
import { useCallback, useEffect, useState } from 'react'
import { integer } from 'light-fakery'

// TODO: I think the correct approach here is actually to cancel timeouts
// as part of the cleanup step of the hook that kicks off animate.
// But this is super annoying in testing the animation so let's just disable
// it in the naive way for now.
export const disableFastRefresh = 'This export is just to stop the dev server fast refresh'


export default function Voronoi () {

	const FPS = 30
	const frame = 0
	const [context, setContext] = useState(null)
	const [delaunay, setDelaunay] = useState(null)

	// First, we set up the canvas and context.
	// We only want to do this once, no matter what else changes.
	//
	// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
	const canvas = useCallback(canvasEl => {

		if (!canvasEl) return

		const localCtx = canvasEl.getContext('2d')
		localCtx.canvas.width = document.body.clientWidth
		localCtx.canvas.height = document.body.clientHeight

		setContext(localCtx)

		console.info('Setup context...', { canvasEl, localCtx })
	}, [])

	// This effect calculates the points and generates the triangles that we will
	// draw during the animate loop. Currently this happens once when the context
	// becomes available, but TODO: it will eventually fire on window resize also.
	useEffect(() => {

		if (!context) return

		// Generate random points
		// TODO: Set number of points based on the browser dimensions
		const NUMBER_OF_POINTS = 1000

		const points = Array.from(
			Array(NUMBER_OF_POINTS),
			() => [integer({ min: 0, max: context.canvas.width }), integer({ min: 0, max: context.canvas.height })]
		)

		console.info('Creating points...', { points })
		setDelaunay(Delaunay.from(points))
	}, [context])

	// Finally, an effect that kicks off the animation when the triangles are available.
	useEffect(() => {

		if (!delaunay) return

		console.info('Generating Delaunay...', delaunay)
		console.info('Starting animation...')

		animate(frame)
	}, [delaunay])

	function animate (frame) {

		/**
		 * We define a range of opacity values, let's say 0 to 50.
		 * Then, we want this function to start at a random spot in the range of
		 * values (based on the input) and increment up to the max value. After
		 * it hits the max value, it should start decrementing towards the min value
		 * (and vice versa).
		 */
		const offsetColor = (x) => {

			const MAX_OPACITY = 50
			const DOUBLE_MAX_OPACITY = MAX_OPACITY * 2
			const clamped = x % (DOUBLE_MAX_OPACITY + 1) // clamp the input to between 0 and DOUBLE_MAX_OPACITY

			const opacity = clamped <= MAX_OPACITY
				? clamped
				: DOUBLE_MAX_OPACITY - clamped

			return `rgba(200 200 200 / ${opacity}%)`
		}

		context.clearRect(0, 0, context.canvas.width, context.canvas.height)

		// delaunay.triangles is a Uint32Array with the triangles represented as sequential groups of 3 points
		for (let i = 0; i < delaunay.triangles.length / 3; ++i) {
			context.strokeStyle = offsetColor(i + frame)
		  context.beginPath()
		  delaunay.renderTriangle(i, context)
		  context.stroke()
		}
		context.closePath()

		setTimeout(() => requestAnimationFrame(() => animate(++frame)), 1000 / FPS)
	}

	return (
		<div className={ css.page }>
			<canvas id='bg' ref={ canvas } className={ css.canvas } />
		</div>
	)
}
