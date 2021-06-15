import React, { FC } from "react";

import scss from "./footer.module.scss";

const Footer: FC = () => {

    return (
        <footer className={ scss.footer }>
            <div className="inner">
                (C) <a href="https://kyoya0819.com/" target="_blank" rel="noopener noreferrer">kyoya0819</a> 2021
            </div>
        </footer>
    );
};

export  default Footer;