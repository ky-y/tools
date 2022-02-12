import type { NextPage } from "next";

import Header from "components/Header/Header";
import Main from "components/Main/Main";
import Footer from "components/Footer/Footer";

import Hero from "screens/index/Hero/Hero";

const Home: NextPage = () => {
    return (
        <>
            <Header />

            <Main>
                <Hero />
            </Main>

            <Footer />
        </>
    );
};

export default Home;
