/**
 * A custom hook that provides data and functions for the partners page.
 *
 * @returns {Object} An object containing the following properties:
 * - `data`: An array of partner data.
 * - `searchData`: An array of filtered partner data based on a search query.
 * - `searchQuery`: The current search query.
 * - `status`: The status of the search query (loading, success, or error).
 * - `openExcelFile`: A function that opens an Excel file and dispatches the `setExcelData` action to update the state with the new data.
 * - `beforeUpload`: A function that sets the Excel data to local storage before uploading it.
 *
 * @example
 * import React from 'eact';
 * import { usePartnersPageModel } from './usePartnersPageModel';
 *
 * const PartnersPage = () => {
 *   const { data, searchData, searchQuery, status, openExcelFile, beforeUpload } = usePartnersPageModel();
 *
 *   return (
 *     <div>
 *       <button onClick={openExcelFile}>Open Excel File</button>
 *       <input type="file" accept=".xlsx" onChange={beforeUpload} />
 *       {status === 'uccess' && (
 *         <ul>
 *           {searchData.map(partner => (
 *             <li key={partner.id}>{partner.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   );
 * };
 *
 * export default PartnersPage;
 */
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExcelData } from "app/Providers/store/excelDataReducer";
import { setExcelDataToLocalStorage } from "core/lib/ExcelDataLocalStorage";

export const usePartnersPageModel = () => {
    const dispatch = useDispatch();
    /*TODO: Add the logic when the user download not EXCEL file, "ALERT or ERROR" */
    const data = useSelector(( state ) => state.EXCELData);
    const filteredData = useSelector(state => state.searchPartnersData)
    const {searchData, searchQuery} = filteredData.searchData;
    const status = filteredData.status
    useEffect(() => {
        dispatch(setExcelData())
    }, [dispatch]);
    const beforeUpload = setExcelDataToLocalStorage
    const openExcelFile = useCallback(() => {
        dispatch(setExcelData())
    }, [dispatch])
    return {data, searchData, searchQuery, status, openExcelFile, beforeUpload};
};