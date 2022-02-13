import type { NextPage } from "next";

import Head from "components/Head/Head";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import Hero from "screens/index/Hero/Hero";

const Home: NextPage = () => {
    return (
        <>
            <Head title="Tools | kyoya0819" />

            <Header />

            <Main>
                <Hero />
            </Main>

            <Footer />
        </>
    );
};

export default Home;
