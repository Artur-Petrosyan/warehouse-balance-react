import { Route, Routes } from "react-router-dom";

import React, { lazy } from "react";
import { withLazyLoadWrapper } from "core/hoc/withLazyLoadWrapper";
import { withMemo } from "core";
import { Page404 } from "pages/Page404";
import HomePage from "src/pages/Home/ui/HomePage";

const WrittenOffPage = lazy(() => import("pages/WrittenOff/ui/WrittenOffPage"));
const AboutUsPage = lazy(() => import("pages/AboutUs/ui/AboutUsPage"));
const ContactsPage = lazy(() => import("pages/Contacts/ui/ContactsPage"));
const PartnersPage = lazy(() => import("pages/Partners/ui/PartnersPage"));
const ProductListPage = lazy(
  () => import("pages/ProductList/ui/ProductListPage"),
);
const PartnersAddressMapPage = lazy(
  () => import("pages/PartnersAddressMap/ui/PartnersAddressMapPage"),
);

export const Router = () => {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route
        path="/warehouse"
        element={withLazyLoadWrapper(<WrittenOffPage />)}
      />
      <Route path="/about-us" element={withLazyLoadWrapper(<AboutUsPage />)} />
      <Route path="/contacts" element={withLazyLoadWrapper(<ContactsPage />)} />
      <Route
        path="/product-list"
        element={withLazyLoadWrapper(<ProductListPage />)}
      />
      <Route path="/partners">
        <Route index={true} element={withLazyLoadWrapper(<PartnersPage />)} />
        <Route
          path="address"
          element={withLazyLoadWrapper(<PartnersAddressMapPage />)}
        />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
export const RouterMemo = withMemo(Router);
