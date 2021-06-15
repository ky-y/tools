import React, { FC } from "react";

import scss from "./card.module.scss";

interface CardInterface {
    className?: string
}

const Card: FC<CardInterface> = ({ children, className }) => {

    return (
        <div className={`${scss.card} ${className}`}>{ children }</div>
    );
};

export default Card;