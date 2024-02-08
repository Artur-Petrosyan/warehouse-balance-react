/**
 * Calculates the total amount of objects in an array of objects by name using the similarityObjectsByName function.
 *
 * @param {Array} data - An array of objects with a name property.
 * @returns {Array} - An array of objects with the same name property and the total amount, notNDS, and totalPrice properties.
 *
 * @example
 * // Import the function
 * import { totalAmount } from './totalAmount.js';
 *
 * // Call the function with an array of objects with a name property
 * const data = [
 *     { name: 'Object 1', amount: 10, notNDS: 5, totalPrice: 15 },
 *     { name: 'Object 2', amount: 20, notNDS: 10, totalPrice: 30 },
 *     { name: 'Object 1', amount: 5, notNDS: 2.5, totalPrice: 7.5 },
 * ];
 * const totalAmountData = totalAmount(data);
 * console.log(totalAmountData);
 * // Output: [
 * //     { name: 'Object 1', amount: 15, notNDS: 7.5, totalPrice: 22.5 },
 * //     { name: 'Object 2', amount: 20, notNDS: 10, totalPrice: 30 },
 * // ]
 */
import { similarityObjectsByName } from "./similarityObjectsByName";

export const totalAmount = data => data.reduce(( acc , obj ) => {
    const existingObj = similarityObjectsByName(acc , obj);
    if ( existingObj ) {
        existingObj.amount += obj.amount;
        existingObj.notNDS += obj.notNDS;
        existingObj.totalPrice += obj.totalPrice;
    } else {
        acc.push({
            key : obj.key ,
            name : obj.name ,
            unit : obj.unit ,
            amount : obj.amount ,
            notNDS : obj.notNDS ,
            totalPrice : obj.totalPrice ,
        });
    }
    return acc;
} , []);