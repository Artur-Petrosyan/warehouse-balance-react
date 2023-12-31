import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import { getSearchPartnersData } from "pages/Partners/lib/getSearchPartnersData";

export const setSearchPartnersData = createAsyncThunk(
        'searchData/setSearchPartnersData' ,
        async ( {data , query} ) => {
            try {
                return {searchData: getSearchPartnersData(data, query), searchQuery: query};
            } catch (err) {
                console.log(err)
            }
        }
    )
;

const searchPartnersSlice = createSlice({
    name : 'searchPartnersData' ,
    initialState : {
        searchData : [] ,
        status : 'idle' ,
    } ,
    extraReducers : ( builder ) => {
        builder
            .addCase(setSearchPartnersData.pending , ( state ) => {
                state.status = 'loading';
            })
            .addCase(setSearchPartnersData.fulfilled , ( state , action ) => {
                state.status = 'succeeded';
                state.searchData = action.payload
            })
            .addCase(setSearchPartnersData.rejected , ( state ) => {
                state.searchData = 'failed';
            });
    } ,
});
export default searchPartnersSlice.reducer;