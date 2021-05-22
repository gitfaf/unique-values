"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uV = __importStar(require("./index"));
describe('get unique values from', function () {
    describe('array', function () {
        it('successfully and expectedly - part 1', function () {
            var array = [10, 2, 1, 2, 3, 4, 5, 10];
            var actual = uV.getUniqueArrayValues(array);
            var expected = [1, 2, 3, 4, 5, 10];
            expect(actual.length).toBe(expected.length);
            for (var i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
        it('successfully and expectedly - part 2', function () {
            var array = [1, 23, 1, 2, 3, 4, 5, 10, 2, 3, 2, 3, 23, 2];
            var actual = uV.getUniqueArrayValues(array);
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
            var actual = uV.getUniqueObjectValues(inObject);
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
            var actual = uV.getUniqueObjectValues(inObject);
            var expected = [12, 14, 100, 200];
            expect(actual.length).toEqual(expected.length);
            for (var i = 0; i < actual.length; i++) {
                expect(actual[i]).toEqual(expected[i]);
            }
        });
    });
});
