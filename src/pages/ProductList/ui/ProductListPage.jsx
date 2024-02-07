import React from 'react';
import { ProductListPagePure } from "./ProductListPagePure";
import { useProductListPageModel } from "../model";

const ProductListPage = () => {
    const {data , beforeUpload , removeData} = useProductListPageModel();
    return <ProductListPagePure
        data={data}
        beforeUpload={beforeUpload}
        removeData={removeData}
    />;
};

export default ProductListPage;