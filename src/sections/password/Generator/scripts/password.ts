import { randomNumber } from "./randomNumber";

const characters = (): string => {
    let words = "";
    for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++)
        words += String.fromCharCode(i);
    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++)
        words += String.fromCharCode(i);
    for (let i = "0".charCodeAt(0); i <= "9".charCodeAt(0); i++)
        words += String.fromCharCode(i);
    return words;
};

const randomString = (): string => {

    const i = randomNumber(0, characters().length -1);
    return characters().charAt(i);
};

export const randomStrings = (length: number): string[] => {

    return [...Array(length)].map(() => {

        return randomString();
    });
};