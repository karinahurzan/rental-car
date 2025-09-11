import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

export const loadCars = createAsyncThunk(
  "cars/load",
  async ({ filters = {}, page = 1, perPage = 12 }, { rejectWithValue }) => {
    try {
      const params = {
        page,
        limit: perPage,
        brand: filters.brand || undefined,
        rentalPrice: filters.price || undefined,
        minMileage: filters.minMileage || undefined,
        maxMileage: filters.maxMileage || undefined,
      };

      const { data } = await fetchCars(params);

      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const loadCarById = createAsyncThunk(
  "cars/loadById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await fetchCarById(id);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const savedFilters = JSON.parse(
  localStorage.getItem("catalog_filters") || "{}"
);

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    total: 0,
    isLoading: false,
    error: null,
    filters: savedFilters,
    hasMore: true,
    car: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.items = [];
      state.page = 1;
      state.total = 0;
      localStorage.setItem("catalog_filters", JSON.stringify(state.filters));
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
