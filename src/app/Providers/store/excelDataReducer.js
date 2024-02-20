import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getExcelDataFromLocalStorage } from "core/lib/ExcelDataLocalStorage";

export const setExcelData = createAsyncThunk(
  "EXCELData/setExcelData",
  async () => {
    try {
      return await getExcelDataFromLocalStorage("excelData");
    } catch (err) {
      console.log(err);
    }
  },
);

const excelDataSlice = createSlice({
  name: "EXCELData",
  initialState: {
    EXCELData: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(setExcelData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setExcelData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.EXCELData = action.payload;
      })
      .addCase(setExcelData.rejected, (state) => {
        state.EXCELData = "failed";
      });
  },
});
export default excelDataSlice.reducer;
