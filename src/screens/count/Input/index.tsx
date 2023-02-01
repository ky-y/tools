import Cookie from "js-cookie";
import React, { FC, useEffect, useState } from "react";
import Textarea from "react-textarea-autosize";

import removeReturn from "./scripts/removeReturn";

import scss from "./index.module.scss";

const Input: FC = () => {

    const [text, setText] = useState<string>("");
    const [segmenter, setSegmenter] = useState<Intl.Segmenter>();

    useEffect(() => {

        if (Intl.Segmenter)
            setSegmenter(new Intl.Segmenter("ja", { granularity: "grapheme" }));

        const past_text = Cookie.get("text");
        if (past_text)
            setText(past_text);
    }, []);

    useEffect(() => {

        Cookie.set("text", text, {
            secure: true
        });
    }, [text]);

    return (
        <section className={ scss.input }>
            <div className="inner">

                <div className={ scss.card }>
                    <Textarea
                        minRows={ 3 }
                        placeholder="文字数をカウントしたい文章を入力してください。"
                        onChange={ e => setText(e.target.value) }
                        value={ text }
                    />

                    <div className={ scss.data }>

                        <div className={ scss.default }>
                            <div className={ scss.title }>文字数</div>
                            <div className={ scss.count }>{ [...removeReturn(text)].length }</div>
                        </div>

                        <ul className={ scss.others }>
                            <li>
                                <div className={ scss.title }>Intl.Segmenter</div>
                                <div className={ scss.count }>{
                                    segmenter
                                        ? [...segmenter.segment(removeReturn(text))].length
                                        : "Not Support"
                                }</div>
                            </li>
                            <li>
                                <div className={ scss.title }>文字数（空白なし）</div>
                                <div className={ scss.count }>{
                                    [
                                        ...removeReturn(text)
                                            .replace(/\s/g, "")
                                    ].length
                                }</div>
                            </li>
                            <li>
                                <div className={ scss.title }>バイト数（UTF-8）</div>
                                <div className={ scss.count }>{
                                    encodeURI(removeReturn(text)).replace(/%../g, "*").length
                                }</div>
                            </li>
                            <li>
                                <div className={ scss.title }>行数</div>
                                <div className={ scss.count }>{
                                    [...text].length
                                    - [...removeReturn(text)].length
                                    - (text.match(/\r\n/g) || []).length
                                    + (text === "" ? 0 : 1)
                                }</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Input;