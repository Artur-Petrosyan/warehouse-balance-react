import React from 'react';
import PartnersPagePure from "./components/PartnersPagePure";
import { usePartnersPageModel } from "../model";

const PartnersPage = () => {
    const {data , searchData , searchQuery ,status, openExcelFile , beforeUpload} = usePartnersPageModel()
    /*TODO: create the Search logic for searching Partners  */
    return (
        <PartnersPagePure
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