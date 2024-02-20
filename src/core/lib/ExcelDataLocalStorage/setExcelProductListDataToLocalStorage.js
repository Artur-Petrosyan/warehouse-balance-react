import { removeFalsyValuesFromArray } from "../removeFalsyValuesFromArray";
import * as XLSX from "xlsx";
import { createObjectFromProductListArray } from "../createObjectFromProductListArray";
import { store } from "app/Providers/store/withStore";
import { setProductListData } from "app/Providers/store/productListReducer";

/**
 * This function reads an Excel file and converts its data into a JSON object. It then removes any falsy values from the array and creates an object from the remaining values. Finally, it stores the object in local storage with the key 'excelProductListData'.
 * @param {File} file - The Excel file to be read.
 * @returns {boolean} false - This function does not return anything.
 * @throws {Error} If there is an error reading the file or converting the data to JSON.
 * @example
 * const file = new File(['data:text/plain;base64,SGVsbG8gV29ybGQh'], 'example.txt', { type: 'text/plain' });
 * setExcelProductListDataToLocalStorage(file);
 */
export const setExcelProductListDataToLocalStorage = (file) => {
  const reader = new FileReader();
  reader.onload = async function (e) {
    const excelData = e.target.result;
    const workbook = XLSX.read(excelData, { type: "binary" });
    const sheets = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheets, { header: 1 });
    const arrayFromJsonData = removeFalsyValuesFromArray(jsonData);
    localStorage.setItem(
      "excelProductListData",
      JSON.stringify(createObjectFromProductListArray(arrayFromJsonData)),
    );
    store.dispatch(
      setProductListData(createObjectFromProductListArray(arrayFromJsonData)),
    );
  };
  reader.readAsBinaryString(file);
  return false;
};
