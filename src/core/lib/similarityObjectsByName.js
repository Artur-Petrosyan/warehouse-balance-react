/**
 * Searches for an object in an array of objects by name using a similarity check.
 *
 * @param {Array} acc - An array of objects with a name property.
 * @param {Object} obj - An object with a name property.
 * @returns {Object|undefined} - The object with the same name property if found, undefined otherwise.
 *
 * @example
 * // Import the function
 * import { similarityObjectsByName } from './similarityObjectsByName.js';
 *
 * // Call the function with an array of objects with a name property and an object with a name property
 * const acc = [
 *     { name: 'Object 1' },
 *     { name: 'Object 2' },
 * ];
 * const obj = { name: 'Object 1' };
 * const similarObject = similarityObjectsByName(acc, obj);
 * console.log(similarObject);
 * // Output: { name: 'Object 1' }
 */
export const similarityObjectsByName = (acc, obj) =>
    acc.find(
        item =>
            item.name
                .toLowerCase()
                // eslint-disable-next-line no-control-regex
                .replace(/[\s\x00-\x1F\x7F]+/g, "")
                .replace(/[^a-zA-Za-яА-ЯԱ-Ֆա-ֆ0-9]+/g, "") ===
            obj.name
                .toLowerCase()
                // eslint-disable-next-line no-control-regex
                .replace(/[\s\x00-\x1F\x7F]+/g, "")
                .replace(/[^a-zA-Za-яА-ЯԱ-Ֆա-ֆ0-9]+/g, "")
    );
