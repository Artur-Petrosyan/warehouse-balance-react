
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
export const setUploadXMLToLocalStorage = (file) => {
    const reader = new FileReader();
    reader.onload =async function (e) {
        const xmlData = e.target.result;
        localStorage.setItem('xmlData', xmlData);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
    };
    reader.readAsText(file);

    return false;
};