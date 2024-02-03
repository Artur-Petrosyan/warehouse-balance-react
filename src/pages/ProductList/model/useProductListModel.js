import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setExcelProductListData } from "app/Providers/store/productListReducer";
import {
    setExcelProductListDataToLocalStorage
} from "core/lib/ExcelDataLocalStorage/setExcelProductListDataToLocalStorage";

export const useProductListPageModel = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.EXCELProductListData)
    const beforeUpload = setExcelProductListDataToLocalStorage
    useEffect(() => {
        dispatch(setExcelProductListData())
    }, [dispatch]);
    const updateData = () => {
        dispatch(setExcelProductListData());
    };
    return {data, beforeUpload, updateData};
};