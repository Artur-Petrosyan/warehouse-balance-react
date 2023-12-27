import React from 'react';
import { useWrittenOffPageModel } from "../model";
import { WrittenOffPagePureMemo } from "./components";

const WrittenOffController = () => {
    const {data , openXmlFile , beforeUpload} = useWrittenOffPageModel();
    return (
        <>
            <WrittenOffPagePureMemo
                data={data}
                openXmlFile={openXmlFile}
                beforeUpload={beforeUpload}
            />
        </>
    )
};


export default WrittenOffController;