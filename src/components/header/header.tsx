import React, { FC } from "react";

import scss from "./Header.module.scss";

import Logo from "./sections/Logo/Logo";
import Navigation from "./sections/Navigation/Navigation";

const Header: FC = () => {

    return (
        <header className={ scss.header }>
            <div className={"inner " + scss.inner}>

                <Logo />
                <Navigation />
            </div>
        </header>
    );
};
export default Header;
