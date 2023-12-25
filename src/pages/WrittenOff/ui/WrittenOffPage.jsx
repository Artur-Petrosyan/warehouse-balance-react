import React from 'react';
import { useWrittenOffPageModel } from "../model";
import { WrittenOffPagePureMemo } from "./components";

const WrittenOffController = () => {
    const {data , openFile} = useWrittenOffPageModel();
    return (
        <>
            <WrittenOffPagePureMemo
                data={data}
                openFile={openFile}
            />
        </>
    )
};


export default WrittenOffController;