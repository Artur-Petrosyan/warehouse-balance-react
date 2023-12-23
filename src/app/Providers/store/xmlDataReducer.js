import { createSlice } from "@reduxjs/toolkit";

const xmlDataSlice = createSlice({
    name : 'xmlData' ,
    initialState : [] ,
    reducers : {
        setData : ( state , action ) => {
            return action.payload
        }
    }
})

export const {setData} = xmlDataSlice.actions;
// export const selectorXMLData = createSelector(( state ) => state.XMLData)
export default xmlDataSlice.reducer