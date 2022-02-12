import type { AppProps } from "next/app";
import Head from "next/head";

import "styles/resets.scss";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Tools | kyoya0819</title>
                <meta name="description" content="This site publishes tools created by kyoya0819." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
