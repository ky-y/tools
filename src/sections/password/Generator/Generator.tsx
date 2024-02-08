import { Button, Card, Range, Section, Textarea } from "@ky-y./ui";
import { Roboto_Mono } from "next/font/google";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { randomStrings } from "./scripts/password";
import { sliceByNumber } from "./scripts/sliceByNumber";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const Generator: FC = () => {
    const [password, setPassword] = useState<string>("");
    const [strength, setStrength] = useState<number>(36);

    useEffect(() => {

        gen(strength, setPassword);
    }, [strength]);

    return (
        <Section inner="sm">
            <Card>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "2rem"
                }}>
                    <div style={{ color: "#555", fontSize: "0.75rem", marginRight: "1rem", userSelect: "none" }}>Weak</div>
                    <Range
                        min={6} max={66} step={6}
                        wrapperStyle={{ width: "100%" }}
                        value={ strength }
                        onChange={(e) => setStrength(Number(e.target.value))}
                    />
                    <div style={{ color: "#555", fontSize: "0.75rem", marginLeft: "1rem", userSelect: "none" }}>Strong</div>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem"
                }}>
                    <Button
                        color="neutral" style={{ marginRight: "1.5rem", userSelect: "none" }}
                        onClick={() => gen(strength, setPassword)}
                    >
                        ReGenerate
                    </Button>
                    <Button
                        color="neutral" style={{ userSelect: "none" }}
                        onClick={() => copy(password)}
                    >
                        Copy
                    </Button>
                </div>

                <Textarea
                    value={password} disabled
                    style={{ width: "100%" }}
                    className={ inter.className }
                />
            </Card>
        </Section>
    );
};

const gen = (strength: number, setPassword: Dispatch<SetStateAction<string>>) => {
    setPassword(
        sliceByNumber(
            randomStrings(strength),
            6
        ).map((password) => {
            return password.join("");
        }).join("-")
    );
};

const copy = (password: string) => {

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
    }
    else {
        navigator.clipboard.writeText(password)
            .then(() => {})
            .catch(() => {
                alert("クリップボードへの書き込み時にエラーが発生しました。\nAn error occurred during copying.");
            });
    }
};