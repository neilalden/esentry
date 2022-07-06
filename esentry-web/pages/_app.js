import ThemeContextProvider from "../components/context/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContextProvider>
			<Component {...pageProps} />
		</ThemeContextProvider>
	);
}

export default MyApp;
