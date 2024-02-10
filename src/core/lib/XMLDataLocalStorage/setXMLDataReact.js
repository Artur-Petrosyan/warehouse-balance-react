import { getXMLDataFromLocalStorage } from "./getXMLDataFromLocalStorage";
import { arrayFromHTMLCollection } from "../arrayFromHTMLCollection";
import { store } from "app/Providers/store/withStore";
import { setXmlData } from "app/Providers/store/xmlDataReducer";
import { asyncSetBuyerAndPriceData } from "app/Providers/store/buyerAndPriceReducer";
import { totalAmount } from "../totalAmount";

/**
 * Handles the file upload for a file upload component.
 *
 * @param {File} file - The file to be uploaded.
 * @returns {boolean} False to prevent the default file upload behavior.
 * @example
 * import { handleUpload } from "path/to/uploadHandler";
 *
 * const handleFileUpload = (file) => {
 *   handleUpload(file);
 * };
 */
export const setUploadXMLToLocalStorage = ( file ) => {
    if ( file?.type === "text/xml" ) {
        const reader = new FileReader();
        reader.onload = async function ( e ) {
            const xmlData = e.target.result;
            localStorage.setItem('xmlData' , xmlData);
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData , 'application/xml');
            const XMLData = await getXMLDataFromLocalStorage("Good");
            const arrayFromXML =  arrayFromHTMLCollection(XMLData);
            store.dispatch(setXmlData(totalAmount(arrayFromXML)))
            store.dispatch(asyncSetBuyerAndPriceData())
        };
        reader.readAsText(file);
        return false;
    } else {
        return "file type is not xml"
    }
};