import React from 'react';
import { useWrittenOffPageModel } from "../model";
import { WrittenOffPagePureMemo } from "./components";

const WrittenOffController = () => {
    const {data , openXmlFile} = useWrittenOffPageModel();
    return (
        <>
            <WrittenOffPagePureMemo
                data={data}
                openXmlFile={openXmlFile}
            />
        </>
    )
};


export default WrittenOffController;