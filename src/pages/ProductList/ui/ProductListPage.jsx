import React from 'react';
import {ProductListPagePure} from "./ProductListPagePure";
import {useProductListPageModel} from "../model";

const ProductListPage = () => {
    const {data, beforeUpload, removeData, addProduct,isModalOpen,showModal,handleOk, handleCancel} = useProductListPageModel();
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
            />
        </>
    )
};

export default ProductListPage;