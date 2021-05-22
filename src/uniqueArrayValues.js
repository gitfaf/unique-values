"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
    var set = new Set(inArray);
    return __spreadArray([], Array.from(set));
}
exports.default = getUniqueArrayValues;
//# sourceMappingURL=uniqueArrayValues.js.map