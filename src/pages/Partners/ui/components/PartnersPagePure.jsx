import React,  from 'react';
import {InputSearch, Table, Upload, withMemo} from "core";
import {Alert, Button} from "antd";


const PartnersPagePure = ({
         data,
         searchData,
         searchQuery,
         status,
         openExcelFile,
         beforeUpload,
         columns,
         alertState
     }
    ) => {
        return (
            <div>
                {alertState ? <Alert
                    message="Warning"
                    description="There is not a address"
                    type="warning"
                    showIcon
                /> : null}
                <InputSearch placeholderText={"Find Partners"}/>
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

export const PartnersPagePureMemo = withMemo(PartnersPagePure);


