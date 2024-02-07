import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { getExcelDataFromLocalStorage } from "core/lib/ExcelDataLocalStorage";

export const setExcelProductListData = createAsyncThunk(
    "EXCELProductListData/setExcelProductListData" ,
    async () => {
        try {
            return await getExcelDataFromLocalStorage("excelProductListData");
        } catch (err) {
            console.log(err);
        }
    }
);

const excelProductListDataSlice = createSlice({
    name : "EXCELData" ,
    initialState : {
        EXCELProductListData : [] ,
        status : "idle" ,
    } ,
    reducers : {
        setProductListData : ( state , action ) => {
            state.EXCELProductListData = action.payload;
        } ,
        removeProductListData : ( state ) => {
            state.EXCELProductListData = [];
        } ,
    } ,
    extraReducers : ( builder ) => {
        builder
            .addCase(setExcelProductListData.pending , ( state ) => {
                state.status = "loading";
            })
            .addCase(setExcelProductListData.fulfilled , ( state , action ) => {
                state.status = "succeeded";
                state.EXCELProductListData = action.payload || [];
            })
            .addCase(setExcelProductListData.rejected , ( state ) => {
                state.EXCELProductListData = "failed";
            });
    } ,
});
export default excelProductListDataSlice.reducer;
export const {setProductListData , removeProductListData} = excelProductListDataSlice.actions;