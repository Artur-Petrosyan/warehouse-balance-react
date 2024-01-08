/**
 * Joins two arrays of objects by merging each object in the first array with the corresponding object in the second array.
 *
 * @function
 * @name joinArrays
 * @param {Array} arr1 - The first array of objects to join.
 * @param {Array} arr2 - The second array of objects to join.
 * @returns {Array} - An array of objects containing the merged data.
 *
 * @example
 * const arr1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
 * const arr2 = [{ id: 1, age: 30 }, { id: 2, age: 25 }];
 * const joinedArray = joinArrays(arr1, arr2);
 * console.log(joinedArray);
 * // Output:
 * // [
 * //   { id: 1, name: 'John', age: 30 },
 * //   { id: 2, name: 'Jane', age: 25 },
 * // ]
 */
export const joinArrays = (arr1, arr2) => {
    return arr1.map((item, index) => {
        return {...item,...arr2[index]}
    })
}
