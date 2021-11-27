import Head from 'next/head'

export default function Layout ({ children }) {

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<link rel="apple-touch-icon" href="/favicon.png" />

				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400&display=swap" />
			</Head>

			<main>{ children }</main>
		</>
	)
}
