import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';

export const setExcelData = createAsyncThunk('EXCELData/setExcelData' , async () => {

});

const excelDataSlice = createSlice({
    name : 'EXCELData' ,
    initialState : {
        EXCELData : [] ,
        status : 'idle',
    } ,
    extraReducers : ( builder ) => {
        builder
            .addCase(setExcelData.pending , ( state ) => {
                state.status = 'loading';
            })
            .addCase(setExcelData.fulfilled , ( state , action ) => {
                state.status = 'succeeded';
                state.EXCELData = action.payload;
            })
            .addCase(setExcelData.rejected , ( state ) => {
                state.EXCELData = 'failed';
            });
    } ,
});
export default excelDataSlice.reducer;