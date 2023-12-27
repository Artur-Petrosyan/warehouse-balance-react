import React from 'react';
import { Button } from "antd";
import { Table , Upload } from "core";

const columns = [
    {
        key : '1' ,
        title : 'Name' ,
        dataIndex : 'name' ,
    } ,
    {
        key : '2' ,
        title : 'HVHH' ,
        dataIndex : "HVHH" ,

    } ,
    {
        key : '3' ,
        title : 'Address' ,
        dataIndex : "address" ,

    } ,
];

const PartnersPagePure = ( {openExcelFile , data , beforeUpload} ) => {
    return (
        <div>
            <Table columns={columns} dataSource={data.EXCELData}/>
            <Upload beforeUpload={beforeUpload}/>
            <Button onClick={openExcelFile}>Open File</Button>
        </div>
    );
};

export default PartnersPagePure;