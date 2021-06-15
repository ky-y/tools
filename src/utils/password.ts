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

const random_string = (length: number): string => {
    return Array.from(crypto.getRandomValues(new Uint32Array(length))).map((n)=>characters()[n%characters().length]).join("");
};

const create = (length: number, times: number): string => {

    let password = "";
    for (let i = 1; i < times; i++)
        password += random_string(length) + "-";
    password += random_string(length);

    return password;
};

export default create;