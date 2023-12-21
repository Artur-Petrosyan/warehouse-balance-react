
/**
 * Converts an HTMLCollection to an array of objects with the specified properties.
 *
 * @param {HTMLCollection} items - An HTMLCollection of elements.
 * @returns {Array} - An array of objects with the specified properties.
 *
 * @example
 * // Import the function
 * import { arrayFromHTMLCollection } from './arrayFromHTMLCollection.js';
 *
 * // Call the function with an HTMLCollection of elements
 * const items = document.getElementsByClassName('item');
 * const itemsArray = arrayFromHTMLCollection(items);
 * console.log(itemsArray);
 * // Output: [
 * //     { name: ['Description 1', 'Description 2'], amount: 10, notNDS: 5, totalPrice: 15 },
 * //     { name: ['Description 3'], amount: 20, notNDS: 10, totalPrice: 20 },
 * // ]
 */
import { convertToArray } from "./convertToArray";

export const arrayFromHTMLCollection = items => Array.from(items).map((item) => {
    const description = convertToArray(item, 'Description');
    const amount = convertToArray(item, 'Amount');
    const priceNotNds = convertToArray(item, "Price");
    const totalPrice = convertToArray(item, "TotalPrice");
    return {
        name: description,
        amount: Number(amount),
        notNDS: Number(priceNotNds),
        totalPrice: Number(totalPrice),
    };
});