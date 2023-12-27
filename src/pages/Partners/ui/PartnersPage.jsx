import React from 'react';
import PartnersPagePure from "./components/PartnersPagePure";
import { usePartnersPageModel } from "../model";

const PartnersPage = () => {
    const {data , openExcelFile , beforeUpload} = usePartnersPageModel()
    /*TODO: create the Search logic for searching Partners  */
    return (
        <PartnersPagePure
            data={data}
            openExcelFile={openExcelFile}
            beforeUpload={beforeUpload}
        />
    );
};

export default PartnersPage;