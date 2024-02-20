import { v4 } from "uuid";
import { convertToArray } from "./convertToArray";

/**
 * Converts an HTML collection of partner names and prices to an array of objects.
 *
 * @function
 * @name arrayFromHTMLCollectionPartnersNameAndPrice
 * @param {HTMLCollection} items - The HTML collection to convert.
 * @param {string} name - The CSS selector for the partner name elements.
 * @param {Function} convertName - A function that converts the partner name elements to an array.
 * @returns {Array} - An array of objects containing the partner names and prices.
 *
 * @example
 * const items = document.querySelectorAll('.partner');
 * const partnerArray = arrayFromHTMLCollectionPartnersNameAndPrice(items, '.partner-name', convertToArray);
 * console.log(partnerArray);
 * // Output:
 * // [
 * //   { key: '1234', name: ['John', 'Doe'] },
 * //   { key: '5678', name: ['Jane', 'Smith'] },
 * //   { price: '100 դր.' },
 * //   { price: '200 դր.' },
 * // ]
 */
export const arrayFromHTMLCollectionPartnersNameAndPrice = (
  items,
  name,
  convertName,
) => {
  return Array.from(items).map((item) => {
    const buyer = item.querySelector(name);
    if (buyer.tagName === "TotalPrice") {
      return {
        price: `${Number(buyer.innerHTML)} դր.`,
      };
    }

    const buyerName = convertToArray(buyer, convertName);

    const id = v4();
    return {
      key: id,
      name: buyerName,
    };
  });
};
