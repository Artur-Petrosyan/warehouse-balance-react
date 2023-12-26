import { combineReducers } from "@reduxjs/toolkit";
import xmlDataReducer from "./xmlDataReducer";
import excelDataReducer from "./excelDataReducer";


export const rootReducer = combineReducers({
    XMLData: xmlDataReducer,
    EXCELData: excelDataReducer
});