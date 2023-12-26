import { Route , Routes } from "react-router-dom";

import { lazy } from "react";
import { withLazyLoadWrapper } from "core/lib/withLazyLoadWrapper";
import { withMemo } from "core";
import { Page404 } from "pages/Page404";

const HomePage = lazy(() => import('pages/Home/ui/HomePage'))
const WrittenOffPage = lazy(() => import('pages/WrittenOff/ui/WrittenOffPage'))
const AboutUsPage = lazy(() => import('pages/AboutUs/ui/AboutUsPage'))
const ContactsPage = lazy(() => import('pages/Contacts/ui/ContactsPage'))
const PartnersPage = lazy(() => import('pages/Partners/ui/PartnersPage'))
export const Router = () => {
    return (
        <Routes>
            <Route index={true} element={withLazyLoadWrapper(<HomePage/>)}/>
            <Route path='/warehouse' element={withLazyLoadWrapper(<WrittenOffPage/>)}/>
            <Route path='/about-us' element={withLazyLoadWrapper(<AboutUsPage/>)}/>
            <Route path='/contacts' element={withLazyLoadWrapper(<ContactsPage/>)}/>
            <Route path='/partners' element={withLazyLoadWrapper(<PartnersPage/>)}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    )
}
export const RouterMemo = withMemo(Router);