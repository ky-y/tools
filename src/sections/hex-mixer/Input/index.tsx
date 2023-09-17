import React, { FC, useEffect, useState } from "react";

import styles from "./index.module.scss";

const Input: FC = () => {
    const [hex1, setHex1] = useState<string>("FFFFFF");
    const [hex2, setHex2] = useState<string>("000000");

    const [hex, setHex] = useState<string>("");

    const [disable, setDisable] = useState<boolean>(true);

    useEffect(() => {
        const hexF = [
            hex1.replace(/[^0-9a-fA-F]/gi, ""),
            hex2.replace(/[^0-9a-fA-F]/gi, "")
        ];

        if (hexF[0].length !== 3 && hexF[0].length !== 6) return setDisable(true);
        if (hexF[1].length !== 3 && hexF[1].length !== 6) return setDisable(true);

        setDisable(false);

        const hexA = hexF.map(hex => {
            const hex_length = hex.length / 3;
            const regex = new RegExp(`.{${hex_length}}`, "g");
            const match = hex.match(regex);

            if (!match)
                throw new Error("Error!");

            return match.map(v => v.length === 1 ? parseInt(v + v, 16) : parseInt(v, 16));
        });

        setHex(
            "#" + hexA[0].map((v, i) => {
                return ("00" + Math.round((v + hexA[1][i]) / 2).toString(16)).slice(-2);
            }).join("")
        );


    }, [hex1, hex2]);

    return (
        <section className={ styles.hex }>
            <div className="inner">

                <div className={ styles.card }>
                    <div className={ styles.form }>
                        <div className={ styles.input }>
                            <span>#</span>
                            <input
                                type="text" value={ hex1 } onChange={ e => setHex1(e.target.value) }
                                maxLength={ 6 }
                            />
                        </div>
                        <div className={ styles.plus } />
                        <div className={ styles.input }>
                            <span>#</span>
                            <input
                                type="text" value={ hex2 } onChange={ e => setHex2(e.target.value) }
                                maxLength={ 6 }
                            />
                        </div>
                    </div>
                    <div className={ styles.result + " " + (disable ? styles.disable : "") }>
                        { hex }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Input;