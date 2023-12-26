import React from 'react';
import PartnersPagePure from "./components/PartnersPagePure";
import { usePartnersPageModel } from "../model";

const PartnersPage = () => {
    const {data , openExcelFile} = usePartnersPageModel()
    return (
        <PartnersPagePure
            data={data}
            openExcelFile={openExcelFile}
        />
    );
};

export default PartnersPage;