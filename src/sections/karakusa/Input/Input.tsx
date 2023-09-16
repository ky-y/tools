import React, { FC, useEffect, useState, useRef } from "react";
import randomNumber from "random-number-csprng";
import { v4 as uuid } from "uuid";

import scss from "./Input.module.scss";

export const Input: FC = () => {
    const [names, setNames] = useState<{ id: string, value: string }[]>([{ id: uuid(), value: "" }]);

    const canvas = useRef<HTMLCanvasElement>(null);
    const outer = useRef<HTMLDivElement>(null);

    useEffect(() => {


        const font = new FontFace("noto", "url(/NotoSerifJP.otf)", {
            style: "normal",
            weight: "400",
            stretch: "condensed",
        });
        font.load().then();
        document.fonts.add(font);


        const windowSizeHandle = () => {
            if (!outer.current || !canvas.current)
                return;

            const w = Number(outer.current.clientWidth);
            canvas.current.width = w;
            canvas.current.height = w;
        };

        windowSizeHandle();

        window.addEventListener("resize", windowSizeHandle);
        return () => removeEventListener("resize", windowSizeHandle);
    }, []);

    useEffect(() => {
        (async () => {

            const el = canvas.current;
            if (!el) return;

            const ctx = el.getContext("2d");
            if(!ctx) return;

            const randomNames = [...names].filter(v => !/^\s*$/.test(v.value));
            for await (const [i] of Object.entries(randomNames)) {
                const a_id = Number(i);
                const a    = randomNames[a_id];

                const b_id = randomNames.length === 1 ? 0 : await randomNumber(0, randomNames.length - 1);
                const b    = randomNames[b_id];

                randomNames[b_id] = a;
                randomNames[a_id] = b;
            }

            const width = el.width;
            const height = el.height;

            ctx.clearRect(0, 0, width, height);
            ctx.font = "normal " + width / 45 + "px noto";
            ctx.save();

            const radius = width / 15;

            const angle = 360 / randomNames.length * Math.PI / 180;

            const measure = ctx.measureText("あ");
            const text_height = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;

            randomNames.forEach(({ value }, name_index) => {
                const name_text = value.split("");

                name_text.forEach((text, text_index) => {
                    ctx.save();

                    const measure = ctx.measureText(text);
                    const text_width = measure.width;


                    ctx.translate(width / 2, height / 2);
                    ctx.rotate(angle * name_index);
                    ctx.fillText(text, -0.5 * text_width, radius + text_index * text_height * 1.5);
                    ctx.restore();
                });
            });
        })();

    }, [names]);

    return (
        <section className={ scss.Input }>
            <div className="inner">

                <div className={ scss.card }>

                    <div>傘連判状として出力する氏名を入力してください</div>
                    <div className={ scss.names }>
                        {
                            names.map(name => {
                                return (
                                    <input
                                        type="text"
                                        value={ name.value }
                                        onChange={ e => setNames(prevState => prevState.map(v => name.id === v.id ? {
                                            id: v.id,
                                            value: e.target.value
                                        } : v)) }
                                        key={ name.id }
                                    />
                                );
                            })
                        }
                        {
                            names[names.length - 1].value !== "" ? (
                                <button
                                    onClick={() => setNames(prevState => [...prevState, { id: uuid(), value: "" }])}
                                >
                                    Add
                                </button>
                            ) : null
                        }
                    </div>
                </div>

                <div className={ scss.export } ref={ outer }>

                    <canvas width={ 400 } height={ 400 } ref={ canvas } style={{ background: "#FFF" }} />
                </div>
            </div>
        </section>
    );
};