import React from "react";
import { NextPage } from "next";

import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import Generator from "screens/password/Generator/Generator";

const Password: NextPage = () => {

    return (
        <>
            <Header />

            <Main>
                <Generator />
            </Main>

            <Footer />
        </>
    );
};
export default Password;
