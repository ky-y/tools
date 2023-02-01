const removeReturn = (value: string): string => {

    return value
        .replace(/\r/g,   "")
        .replace(/\n/g,   "")
        .replace(/\r\n/g, "");
};
export default removeReturn;