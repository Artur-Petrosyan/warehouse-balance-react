import React , { useEffect } from 'react';
import { Table } from "src/core/ui/components/Table/Table";
import { Button , Upload } from "antd";
import { getUploadProps } from "src/core/ui/components/Upload/lib";
import { getXMLDataFromLocalStorage } from "src/core/lib/XMLDataLocalStorage/getXMLDataFromLocalStorage";
import { arrayFromHTMLCollection } from "src/core/lib/arrayFromHTMLCollection";
import { useDispatch } from "react-redux";
import { totalAmount } from "src/core/lib/totalAmount";
import { setData } from "src/app/Providers/store/xmlDataReducer";

const WrittenOffController = () => {
    const uploadProps = getUploadProps()
    const dispatch = useDispatch()
    const XMLData = getXMLDataFromLocalStorage()
    const arrayFromXML = arrayFromHTMLCollection(XMLData)
    const resultData = totalAmount(arrayFromXML)

    useEffect(() => {
        dispatch(setData(resultData))
    } , [dispatch , resultData])
    return (
        <div>
            <Table key={'1'} dataSource={resultData}/>
            <Upload {...uploadProps}><Button>Upload</Button></Upload>
        </div>
    );
};

export default WrittenOffController;