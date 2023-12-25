import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { getXMLDataFromLocalStorage } from "src/core/lib/XMLDataLocalStorage/getXMLDataFromLocalStorage";
import { arrayFromHTMLCollection } from "src/core/lib/arrayFromHTMLCollection";
import { totalAmount } from "src/core/lib/totalAmount";

export const setData = createAsyncThunk('XMLData/setData' , async () => {
    const XMLData = await getXMLDataFromLocalStorage("Good");
    const arrayFromXML = await arrayFromHTMLCollection(XMLData);
    return totalAmount(arrayFromXML);
});

const xmlDataSlice = createSlice({
    name : 'XMLData' ,
    initialState : {
        XMLData : [] ,
        status : 'idle',
    } ,
    extraReducers : ( builder ) => {
        builder
            .addCase(setData.pending , ( state ) => {
                state.status = 'loading';
            })
            .addCase(setData.fulfilled , ( state , action ) => {
                state.status = 'succeeded';
                state.XMLData = action.payload;
            })
            .addCase(setData.rejected , ( state ) => {
                state.status = 'failed';
            });
    } ,
});
export default xmlDataSlice.reducer;