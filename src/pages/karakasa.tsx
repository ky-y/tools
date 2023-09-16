import type { NextPage } from "next";

import Head from "components/Head/Head";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import { Input } from "sections/karakusa";

const Home: NextPage = () => {
    return (
        <>
            <Head title="傘連判状 | ky-y." />

            <Header />

            <Main>
                <Input />
            </Main>

            <Footer />
        </>
    );
};

export default Home;
