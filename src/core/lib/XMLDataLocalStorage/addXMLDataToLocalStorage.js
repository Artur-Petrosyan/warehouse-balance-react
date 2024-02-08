/**
 * Adds XML data to local storage and parses it using DOMParser.
 *
 * @param {Function} getItems - A function that retrieves items from the parsed XML data.
 * @returns {void}
 *
 * @example
 * // Import the function
 * import { addXMLDataToLocalStorage } from './addXMLDataToLocalStorage.js';
 *
 * // Call the function with a function that retrieves items from the parsed XML data
 * addXMLDataToLocalStorage(getItems);
 */
export const addXMLDataToLocalStorage = ( getItems ) => {
    const buttonToLocalStorage = document.querySelector('.to__local')

    buttonToLocalStorage.addEventListener('click' , async () => {
        let fileInput = document.getElementById('fileInput');
        let file = fileInput.files[0];

        if ( file ) {
            let reader = new FileReader();

            reader.onload = async function ( event ) {
                let xmlData = event.target.result;
                localStorage.setItem('xmlData' , xmlData);

                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(xmlData , "text/xml");
                await getItems(xmlDoc);
            };

            reader.readAsText(file);
        }
    })
};