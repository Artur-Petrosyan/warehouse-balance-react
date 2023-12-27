/**
 * Sets the Excel data from a file to local storage.
 *
 * @param {File} file - The file to read the Excel data from.
 * @returns {boolean} false.
 * @example
 * import { setExcelDataToLocalStorage } from "path/to/setExcelDataToLocalStorage";
 *
 * const file = document.getElementById("excel-file").files[0];
 * setExcelDataToLocalStorage(file);
 */
import * as XLSX from "xlsx";
import { removeFalsyValuesFromArray } from "../removeFalsyValuesFromArray";
import { createObjectFromArray } from "../createObjectFromArray";

export const setExcelDataToLocalStorage = (file) => {
    const reader = new FileReader();
    reader.onload = async function (e) {
        const excelData = e.target.result;
        const workbook = XLSX.read(excelData, { type: 'binary' });
        const sheets = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(sheets, { header: 1 });
        const arrayFromJsonData = removeFalsyValuesFromArray(jsonData);
        localStorage.setItem('excelData', JSON.stringify(createObjectFromArray(arrayFromJsonData)));
    };
    reader.readAsBinaryString(file);
    return false;
};