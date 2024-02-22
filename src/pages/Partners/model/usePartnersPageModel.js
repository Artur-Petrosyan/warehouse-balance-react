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
 * import React from 'react';
 * import { usePartnersPageModel } from './usePartnersPageModel';
 *
 * const PartnersPage = () => {
 *   const { data, searchData, searchQuery, status, openExcelFile, beforeUpload } = usePartnersPageModel();
 *
 *   return (
 *     <div>
 *       <button onClick={openExcelFile}>Open Excel File</button>
 *       <input type="file" accept=".xlsx" onChange={beforeUpload} />
 *       {status === 'success' && (
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
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExcelData } from "app/Providers/store/excelDataReducer";
import { setExcelDataToLocalStorage } from "core/lib/ExcelDataLocalStorage";
import { navigateToGoogleMap } from "core/lib/navigateToGoogleMap";
import { Typography } from "antd";

export const usePartnersPageModel = () => {
    const [alertState, setAlertState] = useState(null);
    const columns = [
        {
            key: "1",
            title: "Name",
            dataIndex: "name"
        },
        {
            key: "2",
            title: "HVHH",
            dataIndex: "HVHH",
            render: text => <Typography.Text copyable>{text}</Typography.Text>
        },
        {
            key: "3",
            title: "Address",
            dataIndex: "address",
            render: text => (
                <span
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => navigateToGoogleMap(text, setAlertState)}
                >
                    {text}
                </span>
            )
        }
    ];
    const dispatch = useDispatch();
    /* TODO: Add the logic when the user download not EXCEL file, "ALERT or ERROR" */
    const data = useSelector(state => state.EXCELData);
    const filteredData = useSelector(state => state.searchPartnersData);
    const { searchData, searchQuery } = filteredData.searchData;
    const { status } = filteredData;
    useEffect(() => {
        dispatch(setExcelData());
    }, [dispatch]);
    const beforeUpload = useMemo(() => setExcelDataToLocalStorage, []);
    const openExcelFile = useCallback(() => {
        dispatch(setExcelData());
    }, [dispatch]);
    return {
        data,
        searchData,
        searchQuery,
        status,
        openExcelFile,
        beforeUpload,
        columns,
        alertState
    };
};
