import React, { FC, useEffect, useState } from "react";
import Textarea from "react-textarea-autosize";
import useInterval from "use-interval";

import removeReturn from "./scripts/removeReturn";

import scss from "./index.module.scss";

const Input: FC = () => {

    // Intl.Segmenter
    const [segmenter, setSegmenter] = useState<Intl.Segmenter | undefined>(undefined);

    // 入力値
    const [text, setText] = useState<string>("");

    // 改行削除済み入力値
    const [textDelReturn, setTextDelReturn] = useState<string>("");

    // 文字数（軽量版）
    const [textCount, setTextCount] = useState<number>(0);

    // 文字数（Intl.Segmenter版）
    const [segmentCount, setSegmentCount] = useState<number>(0);

    // 読み上げ目安秒数
    const [second, setSecond] = useState<number>(0);

    // 軽量化スクリプト
    const [interval, setInterval] = useState<number | null>(null);

    useInterval(() => {

        if (segmenter)
            setSegmentCount([...segmenter.segment(text)].length);

        setTextCount([...textDelReturn].length);
    }, interval);

    useEffect(() => {

        setText(window.localStorage.getItem("text") ?? "");

        if (Intl.Segmenter)
            setSegmenter(new Intl.Segmenter("ja", { granularity: "grapheme" }));
    }, []);

    useEffect(() => {

        const textDelReturn = removeReturn(text);
        setTextDelReturn(textDelReturn);

        const lightCount = [...textDelReturn].length;

        setTextCount(lightCount);

        if (10000 < lightCount)
            setInterval(null);

        else if (2000 < lightCount)
            setInterval(1000);

        else {
            setInterval(null);

            if (segmenter)
                setSegmentCount([...segmenter.segment(text)].length);
        }

        // 1分間に300文字がプレゼンにいいらしい。
        setSecond(Math.ceil(lightCount / 300 * 60));

    }, [segmenter, text]);

    return (
        <section className={ scss.input }>
            <div className="inner">

                <div className={ scss.card }>
                    <Textarea
                        minRows={ 3 }
                        placeholder="文字数をカウントしたい文章を入力してください。"
                        onChange={ e => {

                            setText(e.target.value);
                            window.localStorage.setItem("text", e.target.value);
                        } }
                        value={ text }
                    />

                    <div className={ scss.data }>

                        <div className={ scss.default }>
                            <div className={ scss.title }>文字数</div>
                            <div className={ scss.count }>{ [...textDelReturn].length }</div>
                        </div>

                        <ul className={ scss.others }>
                            <li>
                                <div className={ scss.title }>Intl.Segmenter</div>
                                <div className={ scss.count }>{
                                    10000 < textCount
                                        ? "Not Support"
                                        : segmenter
                                            ? segmentCount
                                            : "Not Support"
                                }</div>
                            </li>
                            <li>
                                <div className={ scss.title }>文字数（空白なし）</div>
                                <div className={ scss.count }>{
                                    [
                                        ...textDelReturn
                                            .replace(/\s/g, "")
                                    ].length
                                }</div>
                            </li>
                            <li>
                                <div className={ scss.title }>バイト数（UTF-8）</div>
                                <div className={ scss.count }>{
                                    encodeURI(textDelReturn).replace(/%../g, "*").length
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
                            <li>
                                <div className={ scss.title }>読む目安</div>
                                <div className={ scss.count }>
                                    {
                                        3600 > second
                                            ? ""
                                            : Math.floor(second / 3600) + "h "
                                    }
                                    {
                                        60 > second
                                            ? ""
                                            : Math.floor(second % 3600 / 60) + "m "
                                    }
                                    {
                                        second % 60 + "s"
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Input;