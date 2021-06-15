import React, { FC } from "react";
import { Link } from "react-router-dom";

import scss from "./header.module.scss";

const Header: FC = () => {

    return (
        <header className={ scss.header }>
            <div className="inner">
                <h1>
                    <Link to="/">
                        <span className={ scss.kyoya0819 }>kyoya0819</span>
                        <span className={ scss.tools }>Tools</span>
                    </Link>
                </h1>

            </div>
        </header>
    );
};

export default Header;