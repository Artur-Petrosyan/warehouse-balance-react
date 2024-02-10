import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useMemo, useState} from "react";
import {removeProductListData, setExcelProductListData} from "app/Providers/store/productListReducer";
import {
    setExcelProductListDataToLocalStorage
} from "core/lib/ExcelDataLocalStorage/setExcelProductListDataToLocalStorage";
import {removeDataFromLocalStorage} from "core/lib/localStorageRemoveData";
import {addNewProduct} from "app/Providers/store/productListReducer";

export const useProductListPageModel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch();
    const data = useSelector(state => state.EXCELProductListData);
    const beforeUpload = useMemo(() => setExcelProductListDataToLocalStorage, []);
    const addProduct = useCallback((product) => {
        dispatch(addNewProduct(product))
    }, [])

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        dispatch(setExcelProductListData())
    }, [dispatch]);
    const removeData = (dataRemoveName) => {
        dispatch(removeProductListData());
        removeDataFromLocalStorage(dataRemoveName)
    };
    return {data, beforeUpload, removeData, addProduct,isModalOpen, showModal,handleOk, handleCancel};
};