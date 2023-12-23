import { combineReducers } from "@reduxjs/toolkit";
import xmlDataReducer from "./xmlDataReducer";


export const rootReducer = combineReducers({
    XMLData: xmlDataReducer,
});