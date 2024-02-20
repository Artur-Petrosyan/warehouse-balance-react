/**
 * Calculates the number of pages based on the result array and items per page.
 *
 * @param {Array} result - An array of objects.
 * @param {number} itemsPerPage - The number of items per page.
 * @returns {number} - The number of pages.
 *
 * @example
 * // Import the function
 * import { calculatePageCount } from './calculatePageCount.js';
 *
 * // Call the function with an array of objects and the number of items per page
 * const result = [
 *     { name: 'Object 1', amount: 10, notNDS: 5, totalPrice: 15 },
 *     { name: 'Object 2', amount: 20, notNDS: 10, totalPrice: 30 },
 *     { name: 'Object 3', amount: 30, notNDS: 15, totalPrice: 45 },
 * ];
 * const itemsPerPage = 2;
 * const pageCount = calculatePageCount(result, itemsPerPage);
 * console.log(pageCount);
 * // Output: 2
 */
export const calculatePageCount = (result, itemsPerPage) =>
  Math.ceil(result.length / itemsPerPage);
