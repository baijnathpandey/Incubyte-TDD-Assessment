import { add } from "../index.ts"

describe('Add funcrion test', () => {
  test('With empty string ("")', async () => {
    const result = add('')
    expect(result).toBe(0)
  })

  test('With single number', async () => {
    const result = add('1')
    expect(result).toBe(1)
  })  

  test('With multiple numbers', async () => {
    const result = add('1,5')
    expect(result).toBe(6)
  })  

  test('With any amount of numbers', async () => {
    const result = add('1,2,3,4,5,6,7,8,9,10,11,12,15,17')
    expect(result).toBe(110)
  }) 
})