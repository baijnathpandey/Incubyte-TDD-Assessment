const negativeNumbersCheck = (numbers: number[]) => {
    const negativeNumbers = numbers.filter(number => number < 0)
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`)
    }
}

const splitAndAdd = (numbers: string, delimiter: string): number => {
    const numberArray = numbers.split(delimiter).map(Number)
    negativeNumbersCheck(numberArray)
    const sum = numberArray.reduce((acc, value) => acc + value, 0)

    return sum
}

export const add = (numbers: string): number => {
    try {
        let delimiter = ','
        let inutString = numbers

        if (numbers.startsWith('//')) {
            delimiter = numbers.slice(2,3)
            inutString = numbers.split('\n').pop()
        }
        inutString = inutString.replace('\n', delimiter)
        return splitAndAdd(inutString, delimiter)
    } catch (error: any) {
        console.error(`Error while processing add function: ${error.message}`)
    }
}
