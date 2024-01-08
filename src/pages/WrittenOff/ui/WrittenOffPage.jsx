import React from 'react';
import { useWrittenOffPageModel } from "../model";
import { WrittenOffPagePureMemo } from "./components";

const WrittenOffController = () => {
    const {data ,buyerData, openXmlFile ,removeXMLData, beforeUpload} = useWrittenOffPageModel();
    return (
        <>
            <WrittenOffPagePureMemo
                data={data}
                buyerData={buyerData}
                openXmlFile={openXmlFile}
                removeXMLData={removeXMLData}
                beforeUpload={beforeUpload}
            />
        </>
    )
};


export default WrittenOffController;