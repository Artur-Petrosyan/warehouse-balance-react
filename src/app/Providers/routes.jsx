import {  Routes , Route } from "react-router-dom";

import { lazy } from "react";
import { withLazyLoadWrapper } from "core/lib/withLazyLoadWrapper";
import { withMemo } from "core";

const Home = lazy(() => import('pages/Home/ui/HomePage'))
const WrittenOffPage = lazy(() => import('pages/WrittenOff/ui/WrittenOffPage'))

export const Router = () => {
    return (
        <Routes>
            <Route index={true} element={withLazyLoadWrapper(<Home />)} />
            <Route path='/warehouse' element={withLazyLoadWrapper(<WrittenOffPage />)} />
        </Routes>
    )
}
export const RouterMemo = withMemo(Router);