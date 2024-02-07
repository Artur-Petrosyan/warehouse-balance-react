import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { removeProductListData , setExcelProductListData } from "app/Providers/store/productListReducer";
import {
    setExcelProductListDataToLocalStorage
} from "core/lib/ExcelDataLocalStorage/setExcelProductListDataToLocalStorage";
import { removeDataFromLocalStorage } from "core/lib/localStorageRemoveData";

export const useProductListPageModel = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.EXCELProductListData)
    const beforeUpload = setExcelProductListDataToLocalStorage
    useEffect(() => {
        dispatch(setExcelProductListData())
    } , [dispatch]);
    const removeData = (dataRemoveName) => {
        dispatch(removeProductListData());
        removeDataFromLocalStorage(dataRemoveName)
    };
    return {data , beforeUpload , removeData};
};