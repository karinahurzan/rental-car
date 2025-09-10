import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBrands } from "../api/brands";

export const loadBrands = createAsyncThunk("brands/load", async () => {
  return await fetchBrands();
});

const brandsSlice = createSlice({
  name: "brands",
  initialState: { items: [], isLoading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(loadBrands.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default brandsSlice.reducer;
