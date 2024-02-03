import React from 'react';
import { ProductListPagePure } from "./ProductListPagePure";
import { useProductListPageModel } from "../model";

const ProductListPage = () => {
    const {data , beforeUpload , updateData} = useProductListPageModel();
    return <ProductListPagePure
        data={data}
        beforeUpload={beforeUpload}
        updateData={updateData}
    />;
};

export default ProductListPage;