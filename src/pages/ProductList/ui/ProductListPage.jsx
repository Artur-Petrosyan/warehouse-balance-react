import React from "react";
import { ProductListPagePure } from "./ProductListPagePure";
import { useProductListPageModel } from "../model";

const ProductListPage = () => {
    const {
        data,
        beforeUpload,
        removeData,
        addProduct,
        isModalOpen,
        showModal,
        handleOk,
        handleCancel,
        expandedRowRenderTable
    } = useProductListPageModel();
    return (
        <>
            <ProductListPagePure
                data={data}
                beforeUpload={beforeUpload}
                removeData={removeData}
                addProduct={addProduct}
                isModalOpen={isModalOpen}
                showModal={showModal}
                handleOk={handleOk}
                handleCancel={handleCancel}
                expandedRowRenderTable={expandedRowRenderTable}
            />
        </>
    );
};

export default ProductListPage;
