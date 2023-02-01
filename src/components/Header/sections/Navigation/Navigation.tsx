import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import scss from "./Navigation.module.scss";

const Navigation: FC = () => {
    const path = useRouter().pathname;

    const [checkbox, setCheckbox] = useState<boolean>(false);

    return (
        <nav className={ scss.nav }>

            <input
                type="checkbox" id={ scss.checkbox } checked={ checkbox }
                onChange={ (e) => setCheckbox(e.target.checked) }
            />

            <label id={ scss.hamburger } htmlFor={ scss.checkbox }>
                <span />
                <span />
                <span />
            </label>

            <label id={ scss.close } htmlFor={ scss.checkbox } />

            <ul>
                <li><a href="https://kyoya0819.com/" target="_blank" rel="noreferrer">HP</a></li>
                <li className={ path === "/" ? scss.current : "" }>
                    <Link href="/">Top Page</Link>
                </li>
                <li className={ path === "/password" ? scss.current : "" }>
                    <Link href="/password">Password Marker</Link>
                </li>
                <li className={ path === "/count" ? scss.current : "" }>
                    <Link href="/count">Character Counter</Link>
                </li>
                {/*
                <li className={path === "/seating" ? scss.current : ""}>
                    <Link href="/seating">Seating Chart Maker</Link>
                </li>
                */}
            </ul>
        </nav>
    );
};
export default Navigation;
