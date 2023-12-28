import { combineReducers } from "@reduxjs/toolkit";
import xmlDataReducer from "./xmlDataReducer";
import excelDataReducer from "./excelDataReducer";
import searchPartnersDataReducer from "./searchPartnersDataReducer";


export const rootReducer = combineReducers({
    XMLData : xmlDataReducer ,
    EXCELData : excelDataReducer ,
    searchPartnersData : searchPartnersDataReducer
});