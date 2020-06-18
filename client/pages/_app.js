// import App from 'next/app'
import '../public/bootstrap/css/bootstrap.min.css';
import { ClientContext } from 'graphql-hooks';
import { useGraphQLClient } from '../lib/graphql-client';
import"../public/static/style.css";

export default function MyApp({ Component, pageProps }) {
	const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState)
	return (
		<ClientContext.Provider value={graphQLClient}>
      		<Component {...pageProps} />
    	</ClientContext.Provider>
	)    
}
