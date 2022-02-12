const sliceByNumber = <T>(array: T[], number: number): T[][] => {

    const count = Math.ceil(array.length / number);

    return [...Array(count)].map((_, index1) => {

        return [...Array(Math.min(array.length - number * index1, number))].map((_, index2) => {

            return array[index1 * number + index2];
        });
    });
};
export default sliceByNumber;
