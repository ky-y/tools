import React, { FC } from "react";

import scss from "./Footer.module.scss";

const Footer: FC = () => {

    return (
        <footer className={ scss.footer }>
            <div className="inner">
                (C) <a href="https://ky-y.dev/" target="_blank" rel="noreferrer">ky-y.</a> 2023
            </div>
        </footer>
    );
};
export default Footer;
