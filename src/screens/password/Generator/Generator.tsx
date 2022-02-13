import React, { Dispatch, FC, SetStateAction, useEffect, useState, useRef, RefObject } from "react";

import Range from "components/Range/Range";

import passwordGenerator from "scripts/password";
import sliceByNumber from "scripts/sliceByNumber";

import toggle from "images/toggle.png";

import scss from "./Generator.module.scss";

const Generator: FC = () => {

    const [password, setPassword] = useState<string>("");
    const [strength, setStrength] = useState<number>(41);
    const [copyClass, setCopyClass] = useState<string>("");

    const [ellipsis, setEllipsis] = useState<boolean>(false);
    const [fullView, setFullView] = useState<boolean>(false);

    const textarea = useRef<HTMLDivElement>(null);

    useEffect(() => {

        window.addEventListener("resize", () => resize(textarea, setEllipsis));

        return () => window.removeEventListener("resize", () => resize(textarea, setEllipsis));
    }, []);

    useEffect(() => {

        resize(textarea, setEllipsis);
    }, [password]);

    useEffect(() => {
        gen(strength, setPassword);
    }, [strength]);

    return (
        <section className={ scss.generator }>
            <div className={ "inner " + scss.inner }>

                <div className={ scss.card }>

                    <div id={ scss.password } className={ (ellipsis ? scss.ellipsis : "") + " " }>
                        <input
                            type="checkbox" id={ scss.toggle }
                            checked={ fullView } onChange={ (e) => setFullView(e.target.checked) }
                        />
                        <div
                            className={ scss.editor } contentEditable ref={ textarea }
                            dangerouslySetInnerHTML={{ __html: password }}
                            onChange={ (e) => setPassword((e.target as HTMLDivElement).innerHTML) }
                        />
                        <label htmlFor={ scss.toggle }>
                            <img src={ toggle.src } alt="toggle" />
                        </label>
                    </div>

                    <div className={ scss.controllers }>
                        <Range
                            min={ 12 } max={ 60 } step={ 6 }
                            value={ strength } onChange={(e) => setStrength(Number(e.target.value))}
                        />
                    </div>

                    <div className={ scss.controllers + " " + scss.flex }>

                        <button onClick={ () => gen(strength, setPassword) }>ReGenerate</button>
                        <button onClick={ () => copy(password, setCopyClass) }>Copy</button>

                        <div className={ scss.notify + " " + copyClass }>Copy Success</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Generator;

const resize = (ref: RefObject<HTMLDivElement>, setEllipsis: Dispatch<SetStateAction<boolean>>) => {
    if (!ref.current) return;
    const textarea = ref.current;
    const textOverflow = textarea.style.textOverflow;
    textarea.style.textOverflow = "clip";

    if (textarea.clientWidth < textarea.scrollWidth)
        setEllipsis(true);
    else
        setEllipsis(false);
    textarea.style.textOverflow = textOverflow;
};

const gen = (strength: number, setPassword: Dispatch<SetStateAction<string>>) => {
    passwordGenerator(strength).then((response) => {

        setPassword(
            sliceByNumber(response, 6).map((password) => {
                return password.join("");
            }).join("-")
        );
    });
};

const copy = (password: string, setCopyClass: Dispatch<SetStateAction<string>>) => {

    if (navigator.clipboard === undefined) {
        const textarea = document.createElement("textarea") as HTMLTextAreaElement;
        textarea.value = password;
        textarea.style.position = "fixed";
        textarea.style.left = "200vw";
        textarea.readOnly = true;
        document.body.appendChild(textarea);

        textarea.select();
        // noinspection JSDeprecatedSymbols
        document.execCommand("copy");

        document.body.removeChild(textarea);

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
