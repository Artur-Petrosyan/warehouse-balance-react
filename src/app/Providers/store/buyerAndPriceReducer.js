import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { getXMLDataFromLocalStorage } from "core/lib/XMLDataLocalStorage/getXMLDataFromLocalStorage";
import { arrayFromHTMLCollectionPartnersNameAndPrice } from "core/lib/arrayFromHTMLCollectionPartnersNameAndPrice";
import { joinArrays } from "core/lib/joinArrays";

export const setBuyerAndPriceData = createAsyncThunk('buyerData/setBuyerAndPriceData' , async () => {
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
    extraReducers : ( builder ) => {
        builder
            .addCase(setBuyerAndPriceData.pending , ( state ) => {
                state.status = 'loading';
            })
            .addCase(setBuyerAndPriceData.fulfilled , ( state , action ) => {
                state.status = 'succeeded';
                state.partnersAndPriceData = action.payload;
            })
            .addCase(setBuyerAndPriceData.rejected , ( state ) => {
                state.partnersAndPriceData = 'failed';
            });
    } ,
});
export default buyerAndPriceSlice.reducer;