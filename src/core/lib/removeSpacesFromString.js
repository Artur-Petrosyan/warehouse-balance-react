/**
 * Removes spaces from a string and returns the modified string.
 *
 * @param {string} str - The string to remove spaces from.
 * @returns {string} The modified string with spaces removed.
 * @example
 * import { removeSpacesFromString } from "path/to/removeSpacesFromString";
 *
 * const strWithSpaces = "This is a string with spaces";
 * const strWithoutSpaces = removeSpacesFromString(strWithSpaces);
 * console.log(strWithoutSpaces); // Output: "Thisisastringwithspaces"
 */
export const removeSpacesFromString = str => str.replace(/\s/g, "");
