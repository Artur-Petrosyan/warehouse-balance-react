import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo, useState } from "react";
import { addNewProduct, removeProductListData, setExcelProductListData } from "app/Providers/store/productListReducer";
import { setExcelProductListDataToLocalStorage } from "core/lib/ExcelDataLocalStorage/setExcelProductListDataToLocalStorage";
import { removeDataFromLocalStorage } from "core/lib/localStorageRemoveData";
import { v4 } from "uuid";
import { Typography } from "antd";

export const useProductListPageModel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state.EXCELProductListData);
    const beforeUpload = useMemo(() => setExcelProductListDataToLocalStorage, []);
    const addProduct = useCallback(
        product => {
            dispatch(addNewProduct(product));
        },
        [dispatch]
    );

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = values => {
        setIsModalOpen(false);
        values.key = v4();
        addProduct(values);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const expandedRowRenderTable = record => (
        <Typography.Text copyable={true}>{`${record.code}/${record.name}`}</Typography.Text>
    );

    useEffect(() => {
        dispatch(setExcelProductListData());
    }, [dispatch]);
    const removeData = dataRemoveName => {
        dispatch(removeProductListData());
        removeDataFromLocalStorage(dataRemoveName);
    };
    return {
        data,
        beforeUpload,
        removeData,
        addProduct,
        isModalOpen,
        showModal,
        handleOk,
        handleCancel,
        expandedRowRenderTable
    };
};
