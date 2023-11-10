export const randomNumber = (min: number, max: number): number => {

    return self.crypto.getRandomValues(new Uint32Array(1))[0] % (max - min) + min;
};