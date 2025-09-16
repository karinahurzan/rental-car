import { createSlice } from "@reduxjs/toolkit";
import { loadCarById, loadCars, loadMoreCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    total: 0,
    isLoading: false,
    isLoadingMoreCars: false,
    error: null,
    filters: {},
    hasMore: true,
    car: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.items = [];
      state.page = 1;
      state.total = 0;
    },
    resetVehicles(state) {
      state.items = [];
      state.page = 1;
      state.total = 0;
    },
    appendPage(state, action) {
      state.items = [...state.items, ...action.payload.items];
      state.page = action.payload.page;
      state.total = action.payload.total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadCars.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Number(action.payload.page) === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }
        state.page = Number(action.payload.page);
        state.total = action.payload.totalCars;
        state.hasMore = state.items.length < state.total;
      })
      .addCase(loadCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loadMoreCars.pending, (state) => {
        state.isLoadingMoreCars = true;
        state.error = null;
      })
      .addCase(loadMoreCars.fulfilled, (state, action) => {
        state.isLoadingMoreCars = false;
        if (Number(action.payload.page) === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }
        state.page = Number(action.payload.page);
        state.total = action.payload.totalCars;
        state.hasMore = state.items.length < state.total;
      })
      .addCase(loadMoreCars.rejected, (state, action) => {
        state.isLoadingMoreCars = false;
        state.error = action.payload;
      })
      .addCase(loadCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(loadCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, resetVehicles, appendPage } = carsSlice.actions;
export default carsSlice.reducer;
