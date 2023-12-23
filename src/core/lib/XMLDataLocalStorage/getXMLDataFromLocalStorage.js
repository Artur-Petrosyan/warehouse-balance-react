/**
 * Retrieves XML data from local storage and parses it using DOMParser.
 *
 * @param {Function}  - A function that retrieves items from the parsed XML data.
 * @returns {void}
 *
 * @example
 * // Import the function
 * import { getXMLDataFromLocalStorage } from './getXMLDataFromLocalStorage.js';
 *
 * // Call the function with a function that retrieves items from the parsed XML data
 * getXMLDataFromLocalStorage(getItems);
 */
export const getXMLDataFromLocalStorage = () => {
    let xmlData = localStorage.getItem('xmlData');
    if ( xmlData ) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(xmlData , "text/xml");
        return xmlDoc.documentElement.children
    }else {
        return null
    }
};