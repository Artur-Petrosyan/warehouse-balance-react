import React from 'react';
import { Button } from "antd";
import { Table , Upload } from "core";

const PartnersPagePure = ( {openExcelFile , data} ) => {
    return (
        <div>
            <Table dataSource={data.EXCELData}/>
            <Upload />
            <Button onClick={openExcelFile}>Open File</Button>
        </div>
    );
};

export default PartnersPagePure;