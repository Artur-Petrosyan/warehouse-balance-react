import React , { memo } from "react";
import { Button } from "antd";
import { Table , Upload } from "core";
import { withMemo } from "core";

export const WrittenOffPagePure = memo(( {data , openXmlFile , beforeUpload} ) => {
        return (
            <div>
                <Table dataSource={data.XMLData}/>
                <Upload beforeUpload={beforeUpload}/>
                <Button onClick={openXmlFile}>Open File</Button>
            </div>
        );
    }
)
export const WrittenOffPagePureMemo = withMemo(WrittenOffPagePure)