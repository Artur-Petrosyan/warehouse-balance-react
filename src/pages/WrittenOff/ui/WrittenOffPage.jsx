import React from 'react';
import { Table } from "src/core/ui/components/Table/Table";
import { Button , Upload } from "antd";
import { getUploadProps } from "src/core/ui/components/Upload/lib";

const WrittenOffController = () => {
    const uploadProps = getUploadProps()
    return (
        <div>
            <Table/>
            <Button >Open File</Button>
            <Upload {...uploadProps}><Button>Upload</Button></Upload>
        </div>
    );
};

export default WrittenOffController;