import {getUniqueArrayValues, getUniqueObjectValues} from './index';

describe('get unique values from', () => {
    describe('array', () => {
        it('successfully and expectedly - part 1', () => {
            const array = [10, 2, 1, 2, 3, 4, 5, 10];
            const actual = getUniqueArrayValues(array).sort((a, b) => a - b);
            const expected = [1, 2, 3, 4, 5, 10];
            expect(actual.length).toEqual(expected.length);
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
        it('successfully and expectedly - part 2', () => {
            const array = [1, 23, 1, 2, 3, 4, 5, 10, 2, 3, 2, 3, 23, 2];
            const actual = getUniqueArrayValues(array).sort((a, b) => a - b);
            const expected = [1, 2, 3, 4, 5, 10, 23];
            expect(actual.length).toEqual(expected.length);
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
    });
    describe('object', () => {
        it('successfully and expectedly - part 1', () => {
            const inObject = {
                'a': 12,
                'b': 14,
                'c': 14,
                'd': 12
            };
            const actual = getUniqueObjectValues(inObject).sort((a, b) => a - b);
            const expected = [12, 14];
            expect(actual.length).toEqual(expected.length);
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
        it('successfully and expectedly - part 2', () => {
            const inObject = {
                'a': 12,
                'b': 14,
                'c': 14,
                'd': 12,
                1: 100,
                2: 100,
                3: 200
            };
            const actual = getUniqueObjectValues(inObject).sort((a, b) => a - b);
            const expected = [12, 14, 100, 200];
            expect(actual.length).toEqual(expected.length);
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
    });
});
