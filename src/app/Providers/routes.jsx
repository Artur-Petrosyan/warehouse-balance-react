import {  Routes , Route } from "react-router-dom";

import { lazy } from "react";
import { withLazyLoadWrapper } from "core/lib/withLazyLoadWrapper";
import WrittenOffPage from "../../pages/WrittenOff/ui/WrittenOffPage";


const Home = lazy(() => import('pages/Home/ui/HomePage'))
export const Router = () => {
    return (
        <Routes>
            <Route index={true} element={withLazyLoadWrapper(<Home />)} />
            <Route path='/written-off' element={withLazyLoadWrapper(<WrittenOffPage />)} />
        </Routes>
    )

}