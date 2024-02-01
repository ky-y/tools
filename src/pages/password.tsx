import { Footer, Main } from "@ky-y./ui";
import type { NextPage } from "next";

import { Header } from "components/Header/Header";

import { Generator } from "sections/password";

const Password: NextPage = () => {

    return (
        <>
            <Header />
            <Main>
                <Generator />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
