import React, { FC } from "react";

import scss from "./Footer.module.scss";

const Footer: FC = () => {

    return (
        <footer className={ scss.footer }>
            <div className="inner">
                (C) <a href="https://kyoya0819.com/" target="_blank" rel="noreferrer">kyoya0819</a> 2022
            </div>
        </footer>
    );
};
export default Footer;
