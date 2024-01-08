import React from 'react';
import { useWrittenOffPageModel } from "../model";
import { WrittenOffPagePureMemo } from "./components";

const WrittenOffController = () => {
    const {data ,buyerData, openXmlFile , beforeUpload} = useWrittenOffPageModel();
    return (
        <>
            <WrittenOffPagePureMemo
                data={data}
                buyerData={buyerData}
                openXmlFile={openXmlFile}
                beforeUpload={beforeUpload}
            />
        </>
    )
};


export default WrittenOffController;