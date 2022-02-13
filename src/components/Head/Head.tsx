import React, { FC } from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";

const Head: FC<{
    title: string,
    description?: string
}> = ({ title, description }) => {

    const pathname = useRouter().pathname;

    return (
        <NextHead>
            <title>{ title }</title>
            <meta name="description" content="This site publishes tools created by kyoya0819." />
            <meta property="og:url" content={`https://tools.kyoya0819.com${pathname}`} />
            <meta property="og:type" content={ pathname === "/" ? "website" : "article" } />
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description ?? "This site publishes tools created by kyoya0819." } />
            <meta property="og:site_name" content="Tools | kyoya0819" />
            <meta property="og:image" content="https://tools.kyoya0819.com/ogp.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />
        </NextHead>
    );
};
export default Head;

