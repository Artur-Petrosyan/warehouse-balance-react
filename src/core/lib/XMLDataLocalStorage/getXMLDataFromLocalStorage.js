/**
 * Retrieves XML data from local storage and parses it using DOMParser.
 *
 * @returns {void}
 *
 * @example
 * // Import the function
 * import { getXMLDataFromLocalStorage } from './getXMLDataFromLocalStorage.js';
 *
 * // Call the function with a function that retrieves items from the parsed XML data
 * getXMLDataFromLocalStorage(getItems);
 * @param tagName
 */
export const getXMLDataFromLocalStorage = ( tagName ) => {
    let xmlData = localStorage.getItem('xmlData');
    if ( xmlData ) {
        try {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(xmlData , "text/xml");
            return xmlDoc.getElementsByTagName(tagName);
        } catch (error) {
            console.error('Error parsing XML:' , error);
            return null;
        }
    } else {
        return null;
    }
};