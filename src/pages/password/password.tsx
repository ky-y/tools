import React, { FC, useState, Dispatch, SetStateAction } from "react";

import Card from "components/card/card";
import Button from "components/button/button";

import create_password from "utils/password";

import scss from "./password.module.scss";

const Password: FC = () => {

    const [level, setLevel] = useState(3);
    const [password, setPassword] = useState(create_password(5, 5));

    return (
        <div className="inner-medium">
            <Card className={ scss.card }>
                <div className={ scss.form }>
                    <label htmlFor="level">Strength</label>
                    <div className={ scss.range }>
                        <span>Weak</span>
                        <input
                            type="range" id="level" min="1" max="5"
                            value={ level } onChange={(e) => { create(Number(e.target.value), setLevel, setPassword); }}
                        />
                        <span>Strong</span>
                    </div>
                </div>
                <div className={ scss.form }>
                    <button onClick={() => { create(level, setLevel, setPassword); }}><Button>ReGenerate</Button></button>
                    <button onClick={copy}><Button>Copy</Button></button>
                </div>
                <div className={ scss.form }>
                    <input type="text" id="password" value={ password } readOnly />
                </div>
            </Card>
            <div className={ scss.copy }>Copy Success</div>
        </div>
    );
};




const create = (level: number, setLevel: Dispatch<SetStateAction<number>>, setPassword: Dispatch<SetStateAction<string>>) => {
    setLevel(level);
    setPassword(create_password(level + 2, level + 2));
};


const copy = () => {
    const textBox = document.getElementById("password") as HTMLInputElement;
    textBox.select();
    document.execCommand("copy");

    const copy = document.getElementsByClassName(scss.copy)[0] as HTMLDivElement;

    copy.classList.add(scss.active);

    setTimeout(() => {
        copy.classList.remove(scss.active);
    }, 2000);
};


export default Password;