"use strict";
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
    var uniqueValues = [];
    for (var _i = 0, _a = Object.values(inObject); _i < _a.length; _i++) {
        var value = _a[_i];
        if (uniqueValues.indexOf(value) < 0) {
            uniqueValues.push(value);
        }
    }
    return uniqueValues.sort(function (a, b) { return a - b; });
}
exports.default = getUniqueObjectValues;
//# sourceMappingURL=uniqueObjectValues.js.map