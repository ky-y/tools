import React, { FC } from "react";
import Link from "next/link";

import scss from "./Logo.module.scss";

const Logo: FC = () => {

    return (
        <Link href="/">
            <a>
                <h1 className={ scss.logo }>
                    <span>kyoya0819</span>
                    <span>Tools</span>
                </h1>
            </a>
        </Link>
    );
};
export default Logo;
