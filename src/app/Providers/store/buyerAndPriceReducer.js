import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { getXMLDataFromLocalStorage } from "core/lib/XMLDataLocalStorage/getXMLDataFromLocalStorage";
import {
    arrayFromHTMLCollectionPartnersNameAndPrice
} from "core/lib/arrayFromHTMLCollectionPartnersNameAndPrice";
import { joinArrays } from "core/lib/joinArrays";

export const asyncSetBuyerAndPriceData = createAsyncThunk('buyerData/asyncSetBuyerAndPriceData' , async () => {
    try {
        const XMLDataBuyer = await getXMLDataFromLocalStorage("BuyerInfo");
        const buyerTotalPrice = await getXMLDataFromLocalStorage("Total")
        const buyerTotal = await arrayFromHTMLCollectionPartnersNameAndPrice(buyerTotalPrice , 'TotalPrice')
        const buyerName = await arrayFromHTMLCollectionPartnersNameAndPrice(XMLDataBuyer , 'Taxpayer' , 'Name')
        return joinArrays(buyerName , buyerTotal)
    } catch (err) {
        console.log(err)
    }
});

const buyerAndPriceSlice = createSlice({
    name : 'partnersAndPrice' ,
    initialState : {
        partnersAndPriceData : [] ,
        status : 'idle' ,
    } ,
    reducers : {
        removeBuyerAndPriceData : ( state ) => {
            state.partnersAndPriceData = []
        } ,
        setBuyerAndPriceData : ( state , action ) => {
            state.partnersAndPriceData = action.payload;
        } ,
    } ,
    extraReducers : ( builder ) => {
        builder
            .addCase(asyncSetBuyerAndPriceData.pending , ( state ) => {
                state.status = 'loading';
            })
            .addCase(asyncSetBuyerAndPriceData.fulfilled , ( state , action ) => {
                state.status = 'succeeded';
                state.partnersAndPriceData = action.payload;
            })
            .addCase(asyncSetBuyerAndPriceData.rejected , ( state ) => {
                state.partnersAndPriceData = 'failed';
            });
    } ,
});
export default buyerAndPriceSlice.reducer;
export const {removeBuyerAndPriceData , setBuyerAndPriceData} = buyerAndPriceSlice.actions