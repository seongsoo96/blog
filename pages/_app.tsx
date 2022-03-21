import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
