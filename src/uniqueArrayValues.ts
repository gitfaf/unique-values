/** function getUniqueArrayValues(inArray)
 *
 * @param {Array} inArray The array, that has values we are interested in
 * @returns {Array} Returns sorted array of unique values in inArray
 *
 * @example
 *
 * getUniqueArrayValues([1, 2, 1, 2, 3, 4, 5, 10, 2, 3, 2, 3, 23, 2]) => [1, 2, 3, 4, 5, 10, 23]
 */
export default function getUniqueArrayValues(inArray: any[]): any[] {
    var uniqueValues = [];
    for (const value of inArray) {
        if (uniqueValues.indexOf(value) < 0) {
            uniqueValues.push(value);
        }
    }
    return uniqueValues.sort((a, b) => a - b);
}
