import React from "react";
import { NextPage } from "next";

import Head from "components/Head/Head";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import Input from "screens/count/Input";

const Count: NextPage = () => {

    return (
        <>
            <Head title="Character Counter | Tools | ky-y." />

            <Header />

            <Main>
                <Input />
            </Main>

            <Footer />
        </>
    );
};
export default Count;
