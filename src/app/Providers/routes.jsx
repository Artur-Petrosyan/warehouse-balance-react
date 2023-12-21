import {  Routes , Route } from "react-router-dom";

import { lazy } from "react";
import { LazyLoadWrapperHOC } from "core/lib/lazyLoadWrapperHOC";


const Home = lazy(() => import('pages/Home/Home'))
export const Router = () => {

    return (
        <Routes>
            <Route index={true} element={LazyLoadWrapperHOC(<Home />)} />
        </Routes>
    )

}