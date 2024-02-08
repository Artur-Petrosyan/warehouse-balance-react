import React , { memo } from "react";
import { Alert , Button } from "antd";
import { Table , Upload , withMemo } from "core";
import './writtenOfPage.scss';

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


const columnsPartners = [
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
export const WrittenOffPagePure = memo(( {data , buyerData , removeXMLData , beforeUpload} ) => {
        const {XMLData} = data
        return (
            <div>
                {!data.XMLData ? <Alert
                    message="Warning"
                    description="File type is not xml"
                    type="warning"
                    showIcon
                /> : null}
                <Table columns={columnsProduct} dataSource={XMLData}/>
                <div className="upload-open__container">
                    <Upload beforeUpload={beforeUpload}/>
                    {XMLData?.length ? <Button onClick={removeXMLData}>Remove File</Button> : <></>}
                </div>
                <Table columns={columnsPartners} dataSource={buyerData}/>
            </div>
        );
    }
)
export const WrittenOffPagePureMemo = withMemo(WrittenOffPagePure)