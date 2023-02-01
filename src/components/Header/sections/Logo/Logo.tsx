import React, { FC } from "react";
import Link from "next/link";

import scss from "./Logo.module.scss";

const Logo: FC = () => {

    return (
        <Link href="/">
            <h1 className={ scss.logo }>
                <span>ky-y.</span>
                <span>Tools</span>
            </h1>
        </Link>
    );
};
export default Logo;
