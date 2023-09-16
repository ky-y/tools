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

const random_string = async (): Promise<string> => {

    const i = await randomNumber(0, characters().length -1);
    return characters().charAt(i);
};

const random_strings = (length: number): Promise<Awaited<string[]>> => {

    return Promise.all([...Array(length)].map(() => {

        return random_string();
    }));
};
export default random_strings;
