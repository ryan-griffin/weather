import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Weather</title>
                <link
                    rel="shortcut icon"
                    href="icons/icon-96x96.png"
                    type="image/x-icon"
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
