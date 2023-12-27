import React from 'react';
import PartnersPagePure from "./components/PartnersPagePure";
import { usePartnersPageModel } from "../model";

const PartnersPage = () => {
    const {data , openExcelFile , beforeUpload} = usePartnersPageModel()
    return (
        <PartnersPagePure
            data={data}
            openExcelFile={openExcelFile}
            beforeUpload={beforeUpload}
        />
    );
};

export default PartnersPage;