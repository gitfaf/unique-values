"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('get unique values from', function () {
    describe('array', function () {
        it('successfully and expectedly - part 1', function () {
            var array = [10, 2, 1, 2, 3, 4, 5, 10];
            var actual = index_1.getUniqueArrayValues(array).sort(function (a, b) { return a - b; });
            var expected = [1, 2, 3, 4, 5, 10];
            expect(actual.length).toEqual(expected.length);
            for (var i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
        it('successfully and expectedly - part 2', function () {
            var array = [1, 23, 1, 2, 3, 4, 5, 10, 2, 3, 2, 3, 23, 2];
            var actual = index_1.getUniqueArrayValues(array).sort(function (a, b) { return a - b; });
            var expected = [1, 2, 3, 4, 5, 10, 23];
            expect(actual.length).toEqual(expected.length);
            for (var i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
    });
    describe('object', function () {
        it('successfully and expectedly - part 1', function () {
            var inObject = {
                'a': 12,
                'b': 14,
                'c': 14,
                'd': 12
            };
            var actual = index_1.getUniqueObjectValues(inObject).sort(function (a, b) { return a - b; });
            var expected = [12, 14];
            expect(actual.length).toEqual(expected.length);
            for (var i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
        it('successfully and expectedly - part 2', function () {
            var inObject = {
                'a': 12,
                'b': 14,
                'c': 14,
                'd': 12,
                1: 100,
                2: 100,
                3: 200
            };
            var actual = index_1.getUniqueObjectValues(inObject).sort(function (a, b) { return a - b; });
            var expected = [12, 14, 100, 200];
            expect(actual.length).toEqual(expected.length);
            for (var i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
    });
});
//# sourceMappingURL=index.spec.js.map