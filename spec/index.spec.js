const uV = require('../index')

describe('get unique values from', () => {
    describe('array', () => {
        it('successfully and expectedly - part 1', () => {
            const array = [10, 2, 1, 2, 3, 4, 5, 10]
            const actual = uV.getUniqueArrayValues(array)
            const expected = [1, 2, 3, 4, 5, 10]
            expect(actual.length).toBe(expected.length)
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toBe(expected[i])
            }
        })
        it('successfully and expectedly - part 2', () => {
            const array = [1, 23, 1, 2, 3, 4, 5, 10, 2, 3, 2, 3, 23, 2]
            const actual = uV.getUniqueArrayValues(array)
            const expected = [1, 2, 3, 4, 5, 10, 23]
            expect(actual.length).toBe(expected.length)
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toBe(expected[i])
            }
        })
    })
    describe('object', () => {
        it('successfully and expectedly - part 1', () => {
            const inObject = {
                'a': 12,
                'b': 14,
                'c': 14,
                'd': 12
            }
            const actual = uV.getUniqueObjectValues(inObject)
            const expected = [12, 14]
            expect(actual.length).toBe(expected.length)
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toBe(expected[i])
            }
        })
        it('successfully and expectedly - part 2', () => {
            const inObject = {
                'a': 12,
                'b': 14,
                'c': 14,
                'd': 12,
                1: 100,
                2: 100,
                3: 200
            }
            const actual = uV.getUniqueObjectValues(inObject)
            const expected = [12, 14, 100, 200]
            expect(actual.length).toBe(expected.length)
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toBe(expected[i])
            }
        })
    })
})
