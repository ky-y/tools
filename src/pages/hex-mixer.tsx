import React from "react";
import { NextPage } from "next";

import Head from "components/Head/Head";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import Input from "sections/hex-mixer/Input";

const Count: NextPage = () => {

    return (
        <>
            <Head title="Hex Mixer | Tools | ky-y." />

            <Header />

            <Main>
                <Input />
            </Main>

            <Footer />
        </>
    );
};
export default Count;
