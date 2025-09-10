import { api } from "./axios";

export const fetchBrands = async () => {
  const { data } = await api.get("/brands");

  return data;
};
