import { A, Header as HeaderC } from "@ky-y./ui";
import Link from "next/link";
import React from "react";

import logo from "assets/logo.webp";

export const Header = () => {
    
    return (
        <HeaderC
            title="kyTools"
            logo={ logo }
        >
            <A href="https://ky-y.dev" target="_blank">
                ky-y.
            </A>
            <Link href="/">
                TOP
            </Link>
            <Link href="/password">
                Password Maker
            </Link>
        </HeaderC>
    );
};