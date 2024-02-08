/**
 * Retrieves the Excel data from local storage.
 *
 * @param {string} dataName - The name of the data to retrieve from local storage.
 * @returns {Object} The Excel data from local storage.
 * @example
 * import { getExcelDataFromLocalStorage } from "path/to/getExcelDataFromLocalStorage";
 *
 * const excelData = getExcelDataFromLocalStorage("excelData");
 * console.log(excelData); // Output: The Excel data from local storage
 */
export const getExcelDataFromLocalStorage = ( dataName ) => JSON.parse(localStorage.getItem(`${dataName}`));