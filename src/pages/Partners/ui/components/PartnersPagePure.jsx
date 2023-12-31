import React from 'react';
import { InputSearch , Table , Upload } from "core";
import { Button } from "antd";
import {withMemo} from "core";

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

const PartnersPagePure = ( {data , searchData , searchQuery , status , openExcelFile , beforeUpload} ) => {
    return (
        <div>
            <InputSearch/>
            <Table
                status={status}
                columns={columns}
                dataSource={searchQuery ? searchData : data.EXCELData}
            />
            < Upload beforeUpload={beforeUpload}/>
            <Button onClick={openExcelFile}>Open File</Button>
        </div>
    );
};

export const PartnersPagePureMemo = withMemo(PartnersPagePure) ;