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

                <ul>
                    <li><a href="https://kyoya0819.com/" target="_blank" rel="noopener noreferrer">HP</a></li>
                    <li><Link to="/password">PasswordMaker</Link></li>
                    <li><Link to="/seating">Seating Chart Maker</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;