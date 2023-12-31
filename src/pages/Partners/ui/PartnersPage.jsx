import React from 'react';
import {PartnersPagePureMemo} from "./components";
import { usePartnersPageModel } from "../model";

const PartnersPage = () => {
    const {data , searchData , searchQuery ,status, openExcelFile , beforeUpload} = usePartnersPageModel()
    /*TODO: create the Search logic for searching Partners  */
    return (
        <PartnersPagePureMemo
            data={data}
            searchData={searchData}
            searchQuery={searchQuery}
            status={status}
            openExcelFile={openExcelFile}
            beforeUpload={beforeUpload}
        />
    );
};

export default PartnersPage;