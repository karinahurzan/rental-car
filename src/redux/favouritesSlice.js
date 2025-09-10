import { createSlice } from "@reduxjs/toolkit";

const initial = JSON.parse(localStorage.getItem("rental_favorites") || "[]");

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: initial },
  reducers: {
    addFavorite(state, action) {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        localStorage.setItem("rental_favorites", JSON.stringify(state.items));
      }
    },
    removeFavorite(state, action) {
      state.items = state.items.filter((id) => id !== action.payload);
      localStorage.setItem("rental_favorites", JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
