import { api } from "../../api/axios";

export const fetchCars = (params) => api.get("/cars", { params });

export const fetchCarById = (id) => api.get(`/cars/${id}`);
