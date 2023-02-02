import React from "react";
import { NextPage } from "next";

import Head from "components/Head/Head";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import Generator from "sections/password/Generator";

const Password: NextPage = () => {

    return (
        <>
            <Head title="Password Maker | Tools | ky-y." />

            <Header />

            <Main>
                <Generator />
            </Main>

            <Footer />
        </>
    );
};
export default Password;
