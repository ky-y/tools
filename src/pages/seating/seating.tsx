import React, { FC, useEffect } from "react";

import Card from "components/card/card";
import Button from "components/button/button";

import scss from "./seating.module.scss";

const Seating: FC = () => {

    const rows = [];
    for (let y = 0; y < 10; y++) {
        const cells = [];
        for (let x = 0; x < 10; x++) {
            cells.push(<div className={ scss.td } key={ y * 10 + x } />);
        }
        rows.push(<div className={ scss.tr } key={y}>{cells}</div>);
    }

    useEffect(() => {

        const tds = document.getElementsByClassName(scss.td);
        Object.keys(tds).forEach((key) => {
            const td = tds[Number(key)] as HTMLElement;
            td.onclick = (e) => {
                const event = e.target as Element;
                event.classList.toggle(scss.active);
            };
        });

        td_size();

        window.addEventListener( "resize", td_size);
        return () => window.removeEventListener("resize", td_size);
    });

    return (
        <div className="inner-medium">
            <Card className={ scss.card }>
                <span>Front</span>
                <div className={ scss.table }>{rows}</div>
                <span>Back</span>

                <div>
                    <button onClick={ change }><Button>Do</Button></button>
                </div>
            </Card>
        </div>
    );
};

export default Seating;


const td_size = () => {

    const tds = document.getElementsByClassName(scss.td);
    const height = tds[0].clientWidth / 4 * 3;
    Object.keys(tds).forEach((key) => {
        const td = tds[Number(key)] as HTMLElement;
        td.style.minHeight = height + "px";
    });
};


const change = () => {
    const tds = document.getElementsByClassName(scss.td);
    const actives = document.getElementsByClassName(scss.active);
    const array = [...Array(actives.length)].map((_, i) => i);
    for(let i = (array.length - 1); 0 < i; i--){
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
    }

    Object.keys(tds).forEach((key) => {
        const td = tds[Number(key)] as HTMLDivElement;
        td.innerHTML = "";
    });

    Object.keys(actives).forEach((key) => {
        const active = actives[Number(key)] as HTMLDivElement;
        active.innerHTML = String(array[Number(key)] + 1);
    });

    td_size();
};