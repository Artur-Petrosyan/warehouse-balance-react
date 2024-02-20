import { v4 } from "uuid";

/**
 * This function takes an array of product data and creates an object from it. The object has a unique key, a code, a name, a unit, a price, and a price without NDS.
 * @param {Array} array - An array of product data.
 * @returns {Array} An array of objects with product data.
 * @throws {Error} If the input array is empty or does not have the expected format.
 * @example
 * const productListArray = [
 *   ["01", "Product 1", "kg", "10.00", "10.00"],
 *   ["02", "Product 2", "l", "20.00", "20.00"],
 *   ["03", "Product 3", "m", "30.00", "30.00"]
 * ];
 * const productList = createObjectFromProductListArray(productListArray);
 * console.log(productList);
 */
export const createObjectFromProductListArray = (array) => {
  return array.slice(1).map((item) => {
    return {
      key: v4(),
      code: item[0],
      name: String(item[1]).trim(),
      unit: item[2] ? item[2] : "unknown",
      price: item[3],
      notNDS: item[4]?.toFixed(2),
    };
  });
};
