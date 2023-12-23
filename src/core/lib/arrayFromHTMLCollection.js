
/**
 * Converts an HTML collection to an array of objects.
 *
 * @param {HTMLCollection} items - The HTML collection to be converted.
 * @returns {Array} An array of objects.
 * @example
 * import { arrayFromHTMLCollection } from "path/to/arrayFromHTMLCollection";
 *
 * const htmlCollection = document.getElementsByClassName("my-class");
 * const myArray = arrayFromHTMLCollection(htmlCollection);
 *
 * // Use the array in your code
 * myArray.forEach((item) => {
 *   console.log(item.name);
 *   console.log(item.amount);
 *   console.log(item.notNDS);
 *   console.log(item.totalPrice);
 * });
 */
import { convertToArray } from "./convertToArray";
import { v4  } from 'uuid';
export const arrayFromHTMLCollection = (items) =>
    Array.from(items).map((item) => {
        const description = convertToArray(item, "Description");
        const amount = convertToArray(item, "Amount");
        const priceNotNds = convertToArray(item, "Price");
        const totalPrice = convertToArray(item, "TotalPrice");
        const id = v4()
        return {
            key: id,
            name: description,
            amount: Number(amount),
            notNDS: Number(priceNotNds),
            totalPrice: Number(totalPrice),
        };
    });