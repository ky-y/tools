// Appleまじ許さん
const isiOS = (): boolean => {
    const ua = window.navigator.userAgent;
    return (
        ua.indexOf("iPhone") != -1
        || ua.indexOf("iPad") != -1
        || ua.indexOf("iPod") != -1
    );
};
export default isiOS;
