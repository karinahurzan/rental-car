import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";

export const fetchCars = (params) => api.get("/cars", { params });

export const fetchCarById = (id) => api.get(`/cars/${id}`);

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

export const loadMoreCars = createAsyncThunk(
  "cars/loadMore",
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
