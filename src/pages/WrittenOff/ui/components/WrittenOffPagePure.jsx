import React , { memo } from "react";
import { Button } from "antd";
import { Table , Upload , withMemo } from "core";

const columnsProduct = [
    {
        key : '1' ,
        title : 'Name' ,
        dataIndex : 'name' ,
    } ,
    {
        key : '2' ,
        title : 'Unit' ,
        dataIndex : "unit" ,

    } ,
    {
        key : '3' ,
        title : 'Quantity' ,
        dataIndex : "amount" ,

    } ,
    {
        key : '3' ,
        title : 'Without NDS' ,
        dataIndex : 'notNDS' ,

    } ,
    {
        key : '3' ,
        title : 'Total Amount' ,
        dataIndex : 'totalPrice' ,

    } ,
];


const columnsParters = [
    {
        key : '4' ,
        title : 'Name' ,
        dataIndex : 'name' ,
    } ,
    {
        key : '5' ,
        title : 'Price' ,
        dataIndex : "price" ,
    } ,
]
export const WrittenOffPagePure = memo(( {data ,buyerData, openXmlFile , beforeUpload} ) => {
        return (
            <div>
                <Table columns={columns} dataSource={data.XMLData}/>
                <Upload beforeUpload={beforeUpload}/>
                <Button onClick={openXmlFile}>Open File</Button>
            </div>
        );
    }
)
export const WrittenOffPagePureMemo = withMemo(WrittenOffPagePure)