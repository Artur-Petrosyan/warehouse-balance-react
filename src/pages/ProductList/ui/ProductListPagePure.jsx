import React from "react";
import { Table , Upload } from "core";
import { Button } from "antd";

const columnsProductList = [
    {
        key : '1' ,
        title : 'Code' ,
        dataIndex : 'code' ,
    } ,
    {
        key : '2' ,
        title : 'Name' ,
        dataIndex : 'name' ,
    } ,
    {
        key : '3' ,
        title : 'Unit' ,
        dataIndex : "unit" ,

    } ,
    {
        key : '4' ,
        title : 'Price' ,
        dataIndex : "price" ,
    } ,
    {
        key : '5' ,
        title : 'Price Without NDS' ,
        dataIndex : 'notNDS' ,
    } ,
];
export const ProductListPagePure = ( {data , beforeUpload , updateData} ) => {
    return <div>
        <Table columns={columnsProductList} dataSource={data.EXCELProductListData}/>
        <div className="upload-open__container">
            <Upload beforeUpload={beforeUpload}/>
            <Button onClick={updateData}>Open File</Button>
        </div>
    </div>
}
