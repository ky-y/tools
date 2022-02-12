import React, {Dispatch, FC, SetStateAction, useEffect, useState, useRef, MutableRefObject} from "react";

import Range from "components/Range/Range";

import passwordGenerator from "scripts/password";
import sliceByNumber from "scripts/sliceByNumber";
import isiOS from "scripts/isiOS";

import scss from "./Generator.module.scss";

const Generator: FC = () => {

    const [password, setPassword] = useState<string>("");
    const [strength, setStrength] = useState<number>(41);
    const [copyClass, setCopyClass] = useState<string>("");

    const textarea = useRef(null);

    useEffect(() => {

        if (!textarea.current) return;

        const element = textarea.current as HTMLTextAreaElement;
        element.style.height = "auto";
        element.style.height = element.scrollHeight + 2 + "px";
    }, [password]);

    useEffect(() => {
        gen(strength, setPassword);
    }, [strength]);

    return (
        <section className={ scss.generator }>
            <div className={ "inner " + scss.inner }>

                <div className={ scss.card }>

                    <textarea
                        id={ scss.password } ref={ textarea }
                        onChange={ (e) => setPassword(e.target.value) }
                        rows={ 1 }
                        value={ password }
                    />

                    <div className={ scss.controllers }>
                        <Range
                            min={ 12 } max={ 60 } step={ 6 }
                            value={ strength } onChange={(e) => setStrength(Number(e.target.value))}
                        />
                    </div>

                    <div className={ scss.controllers }>

                        <button onClick={ () => gen(strength, setPassword) }>ReGenerate</button>
                        <button onClick={ () => copy(password, setCopyClass, textarea) }>Copy</button>

                        <div className={ scss.notify + " " + copyClass }>Copy Success</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Generator;

const gen = (strength: number, setPassword: Dispatch<SetStateAction<string>>) => {
    passwordGenerator(strength).then((response) => {

        setPassword(
            sliceByNumber(response, 6).map((password) => {
                return password.join("");
            }).join("-")
        );
    });
};

const copy = (password: string, setCopyClass: Dispatch<SetStateAction<string>>, textarea: MutableRefObject<null>) => {

    if (isiOS() && textarea.current) {
        const element = textarea.current;

        const selected = window.getSelection();

        const range = document.createRange();
        range.selectNodeContents(element);

        if (selected) {
            selected.removeAllRanges();
            selected.addRange(range);
        }

        // noinspection JSDeprecatedSymbols
        document.execCommand("copy");

        setCopyClass(scss.success);

        setTimeout(() => {
            setCopyClass("");
        }, 2000);
    }
    else {
        navigator.clipboard.writeText(password)
            .then(() => {
                setCopyClass(scss.success);

                setTimeout(() => {
                    setCopyClass("");
                }, 2000);
            })
            .catch(() => {
                alert("クリップボードへの書き込み時にエラーが発生しました。\nAn error occurred during copying.");
            });
    }
};
