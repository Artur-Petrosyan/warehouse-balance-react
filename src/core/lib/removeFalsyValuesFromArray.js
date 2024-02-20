/**
 * Filters out any falsy values from an array and returns a new array with only truthy values.
 *
 * @param {Array} data - The array to filter.
 * @returns {Array} A new array with only truthy values.
 * @example
 * import { arrayWithOutFalsy } from "path/to/arrayWithOutFalsy";
 *
 * const data = [0, 1, false, true, "", "hello", null, undefined];
 * const filteredData = arrayWithOutFalsy(data);
 * console.log(filteredData); // Output: [1, true, "hello"]
 */
export const removeFalsyValuesFromArray = (data) =>
  data.map((item) => item.filter(Boolean));
