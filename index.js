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
    var values = []
    for (const value of Object.values(inObject)) {
        if (values.indexOf(value) < 0) {
            values.push(value)
        }
    }
    return values.sort((a, b) => a - b)
}

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
    var values = []
    for (const value of inArray) {
        if (values.indexOf(value) < 0) {
            values.push(value)
        }
    }
    return values.sort((a, b) => a - b)
}

module.exports = {
    getUniqueArrayValues,
    getUniqueObjectValues
}
