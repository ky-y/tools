import React, { FC, useState, Dispatch, SetStateAction } from "react";

import Card from "components/card/card";
import Button from "components/button/button";

import create_password from "utils/password";

import scss from "./password.module.scss";


const Password: FC = () => {
    const [password, setPassword] = useState(create_password(6, 6));

    return (
        <div className="inner-medium">
            <Card className={ scss.card }>
                <div className={ scss.form }>
                    <input type="text" id="password" value={ password } readOnly />
                </div>
                <div className={ scss.form }>
                    <button onClick={() => { create(setPassword); }}><Button>ReGenerate</Button></button>
                    <button onClick={copy}><Button>Copy</Button></button>
                </div>
            </Card>
            <div className={ scss.copy }>Copy Success</div>
        </div>
    );
};

export default Password;


const create = (setPassword: Dispatch<SetStateAction<string>>) => {
    setPassword(create_password(6, 6));
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