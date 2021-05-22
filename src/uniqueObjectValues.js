"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** function getUniqueObjectValues(inObject)
 *
 * @param {Object} inObject The object, key-value pair object that has values we are interested in
 * @returns {Array} Returns sorted array of unique values in inObject
 *
 * @example
 *
 * getUniqueObjectValues({'a': 12, 'b': 14, 'c': 14, 'd': 12}) => [12, 14]
 */
function getUniqueObjectValues(inObject) {
    return __spreadArray([], Array.from(new Set(Object.values(inObject)))).sort(function (a, b) { return a - b; });
}
exports.default = getUniqueObjectValues;
//# sourceMappingURL=uniqueObjectValues.js.map