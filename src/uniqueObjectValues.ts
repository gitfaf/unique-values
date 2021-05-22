/** function getUniqueObjectValues(inObject)
 *
 * @param {Object} inObject The object, key-value pair object that has values we are interested in
 * @returns {Array} Returns sorted array of unique values in inObject
 *
 * @example
 *
 * getUniqueObjectValues({'a': 12, 'b': 14, 'c': 14, 'd': 12}) => [12, 14]
 */
export default function getUniqueObjectValues(inObject: Object): any[] {
    var uniqueValues = [];
    for (const value of Object.values(inObject)) {
        if (uniqueValues.indexOf(value) < 0) {
            uniqueValues.push(value);
        }
    }
    return uniqueValues.sort((a, b) => a - b);
}
