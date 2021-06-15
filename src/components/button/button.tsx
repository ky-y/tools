import React, { FC } from "react";

import scss from "./button.module.scss";

interface ButtonInterface {
    className?: string
}

const Button: FC<ButtonInterface> = ({ children, className}) => {

    return (
        <div className={`${scss.button} ${className}`}>{ children }</div>
    );
};

export default Button;