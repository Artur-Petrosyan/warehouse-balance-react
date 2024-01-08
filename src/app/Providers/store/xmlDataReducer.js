import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { getXMLDataFromLocalStorage } from "src/core/lib/XMLDataLocalStorage/getXMLDataFromLocalStorage";
import { arrayFromHTMLCollection } from "src/core/lib/arrayFromHTMLCollection";
import { totalAmount } from "src/core/lib/totalAmount";

export const setXmlData = createAsyncThunk('XMLData/setXmlData' , async () => {
    try {
        const XMLData = await getXMLDataFromLocalStorage("Good");
        const arrayFromXML = await arrayFromHTMLCollection(XMLData);
        return totalAmount(arrayFromXML);
    } catch (e) {
        console.log(e)
    }
});

const xmlDataSlice = createSlice({
    name : 'XMLData' ,
    initialState : {
        XMLData : [] ,
        status : 'idle' ,
    } ,
    reducers : {
        removeXML : ( state ) => {
            state.XMLData = [];
        }
    } ,
    extraReducers : ( builder ) => {
        builder
            .addCase(setXmlData.pending , ( state ) => {
                state.status = 'loading';
            })
            .addCase(setXmlData.fulfilled , ( state , action ) => {
                state.status = 'succeeded';
                state.XMLData = action.payload;
            })
            .addCase(setXmlData.rejected , ( state ) => {
                state.status = 'failed';
            });
    } ,
});
export const {removeXML} = xmlDataSlice.actions
export default xmlDataSlice.reducer;