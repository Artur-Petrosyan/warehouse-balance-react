import React from 'react';
import { PartnersPagePureMemo } from "./components";
import { usePartnersPageModel } from "../model";

const PartnersPage = () => {
    const {
        data,
        searchData,
        searchQuery,
        status,
        openExcelFile,
        beforeUpload,
        columns,
        alertState
    } = usePartnersPageModel()
    return (
        <PartnersPagePureMemo
            data={data}
            searchData={searchData}
            searchQuery={searchQuery}
            status={status}
            openExcelFile={openExcelFile}
            beforeUpload={beforeUpload}
            columns={columns}
            alertState={alertState}
        />
    );
};

export default PartnersPage;