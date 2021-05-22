"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** function getUniqueArrayValues(inArray)
 *
 * @param {Array} inArray The array, that has values we are interested in
 * @returns {Array} Returns sorted array of unique values in inArray
 *
 * @example
 *
 * getUniqueArrayValues([1, 2, 1, 2, 3, 4, 5, 10, 2, 3, 2, 3, 23, 2]) => [1, 2, 3, 4, 5, 10, 23]
 */
function getUniqueArrayValues(inArray) {
    var uniqueValues = [];
    for (var _i = 0, inArray_1 = inArray; _i < inArray_1.length; _i++) {
        var value = inArray_1[_i];
        if (uniqueValues.indexOf(value) < 0) {
            uniqueValues.push(value);
        }
    }
    return uniqueValues.sort(function (a, b) { return a - b; });
}
exports.default = getUniqueArrayValues;
//# sourceMappingURL=uniqueArrayValues.js.map