import { Footer, Main } from "@ky-y./ui";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "components/Header/Header";

import { Generator } from "sections/password";

const Password: NextPage = () => {

    return (
        <>
            <Head>
                <title>Password Maker | kyTools</title>
            </Head>
            <Header />
            <Main>
                <Generator />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
