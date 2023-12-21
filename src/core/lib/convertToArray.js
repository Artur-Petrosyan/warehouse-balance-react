/**
 * Converts an HTML element to an array of strings using the specified tag name.
 *
 * @param {HTMLElement} item - An HTML element.
 * @param {string} name - A tag name.
 * @returns {Array} - An array of strings.
 *
 * @example
 * // Import the function
 * import { convertToArray } from './convertToArray.js';
 *
 * // Call the function with an HTML element and a tag name
 * const item = document.getElementById('item');
 * const name = 'Description';
 * const descriptionArray = convertToArray(item, name);
 * console.log(descriptionArray);
 * // Output: ['Description 1', 'Description 2']
 */
export const convertToArray = (item, name) => Array.from(item.children)
    .filter(item => item.tagName === name)
    .map(item => item.innerHTML)
    .toString();