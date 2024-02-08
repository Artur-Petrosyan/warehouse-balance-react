/**
 * Converts an HTML element to an array of values.
 *
 * @param {HTMLElement} item - The HTML element to be converted.
 * @param {string} name - The name of the element to be retrieved.
 * @returns {Array} An array of values.
 * @example
 * import { convertToArray } from "path/to/convertToArray";
 *
 * const myElement = document.getElementById("my-element");
 * const myArray = convertToArray(myElement, "my-name");
 *
 * // Use the array in your code
 * myArray.forEach((value) => {
 *   console.log(value);
 * });
 */
export const convertToArray = ( item , name ) => Array.from(item.children)
    .filter(item => item.tagName === name)
    .map(item => item.innerHTML)
    .toString();