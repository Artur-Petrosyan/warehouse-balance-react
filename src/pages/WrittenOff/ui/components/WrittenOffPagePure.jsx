import React , { memo } from "react";
import { Button } from "antd";
import { Table , Upload } from "core";
import { getUploadProps } from "core/ui/components/Upload/lib";
import { withMemo } from "core";

export const WrittenOffPagePure = memo(( {data , openXmlFile} ) => {
        return (
            <div>
                <Table dataSource={data.XMLData}/>
                <Upload uploadProps={getUploadProps()}/>
                <Button onClick={openXmlFile}>Open File</Button>
            </div>
        );
    }
)
export const WrittenOffPagePureMemo = withMemo(WrittenOffPagePure)