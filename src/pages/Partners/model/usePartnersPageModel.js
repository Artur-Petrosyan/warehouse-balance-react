import { useCallback , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { setExcelData } from "app/Providers/store/excelDataReducer";

export const usePartnersPageModel = () => {
    const dispatch = useDispatch();
    /*TODO: Add the logic when the user download not EXCEL file , "ALERT or ERROR" */
    const data = useSelector(( state ) => state.EXCELData);
    useEffect(() => {
        dispatch(setExcelData())
    } , [dispatch]);

    const openExcelFile = useCallback(() => {
        dispatch(setExcelData())
    } , [dispatch])
    return {data , openExcelFile};
}