
const splitAndAdd = (numbers: string, delimiter: string): number => {
    const numberArray = numbers.split(delimiter)
    const sum = numberArray.reduce((acc, value) => acc + Number(value), 0)

    return sum
}

export const add = (numbers: string): number => {
    return splitAndAdd(numbers, ',')
}
