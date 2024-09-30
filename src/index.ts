
const splitAndAdd = (numbers: string, delimiter: string): number => {
    const numberArray = numbers.split(delimiter)
    const sum = numberArray.reduce((acc, value) => acc + Number(value), 0)

    return sum
}

export const add = (numbers: string): number => {
    let delimiter = ','
    let inutString = numbers

    if (numbers.startsWith('//')) {
        delimiter = numbers.slice(2,3)
        inutString = numbers.split('\n').pop()
    }
    inutString = inutString.replace('\n', delimiter)
    return splitAndAdd(inutString, delimiter)
}
