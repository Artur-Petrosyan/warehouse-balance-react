/**
 * Creates an array of objects from an array of arrays. Each object in the new array has a unique key, name, HVHH, and address property.
 *
 * @param {Array} array - The array of arrays to convert to an array of objects.
 * @returns {Array} An array of objects with unique keys, names, HVHHs, and addresses.
 * @example
 * import { createObjectFromArray } from "path/to/createObjectFromArray";
 *
 * const array = [
 *   ["John Doe", 123456, "123 Main St"],
 *   ["Jane Smith", "789 Main St"],
 *   ["Bob Johnson", 123456, null],
 * ];
 * const objects = createObjectFromArray(array);
 * console.log(objects); // Output: [
 *   { key: "11111111-1111-1111-1111-111111111111", name: "John Doe", HVHH: "123456", address: "123 Main St" },
 *   { key: "22222222-2222-2222-2222-222222222222", name: "Jane Smith", HVHH: "789MainSt", address: "unknown" },
 *   { key: "33333333-3333-3333-3333-333333333333", name: "Bob Johnson", HVHH: "123456", address: null },
 * ]
 */
import {v4} from "uuid";
import {removeSpacesFromString} from "./removeSpacesFromString";

export const createObjectFromArray = (array) => {
    return array.map(item => {
        return {
            key: v4(),
            name: item[0],
            HVHH: typeof item[1] === "string" ? removeSpacesFromString(item[1]) : String(item[1]),
            address: item[2] ? item[2] : "unknown"
        }
    })
}