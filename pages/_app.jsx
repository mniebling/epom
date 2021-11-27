import Layout from '../components/Layout'
import './_app.css'

export default function MyApp ({ Component, pageProps }) {

	return (
		<Layout>
			<Component { ...pageProps } />
		</Layout>
	)
}
