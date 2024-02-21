import { combineReducers } from "@reduxjs/toolkit";
import xmlDataReducer from "./xmlDataReducer";
import excelDataReducer from "./excelDataReducer";
import searchPartnersDataReducer from "./searchPartnersDataReducer";
import buyerAndPriceReducer from "./buyerAndPriceReducer";
import productListReducer from "./productListReducer";

export const rootReducer = combineReducers({
    XMLData: xmlDataReducer,
    EXCELData: excelDataReducer,
    searchPartnersData: searchPartnersDataReducer,
    buyerAndPriceData: buyerAndPriceReducer,
    EXCELProductListData: productListReducer
});
