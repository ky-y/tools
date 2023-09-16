import csprng from "random-number-csprng";

export const randomNumber = (min: number, max: number): Promise<number> => {

    return new Promise((resolve, reject) => {
        csprng(min, max)
            .then((res) => {
                return resolve(res);
            })
            .catch((res) => {
                return reject(res);
            });
    });
};