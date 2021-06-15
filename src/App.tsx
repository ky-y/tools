import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "components/header/header";
import Footer from "components/footer/footer";
import Index from "pages/index/index";
import Password from "pages/password/password";
import Seating from "pages/seating/seating";

import "App.scss";

const App: FC = () => {

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Route exact path="/"         component={ Index } />
                <Route exact path="/password" component={ Password } />
                <Route exact path="/seating"  component={ Seating } />
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
