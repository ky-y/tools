import type { AppProps } from "next/app";

import "styles/resets.scss";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {

    return <Component {...pageProps} />;
}

export default MyApp;
