import { createReducer } from '@reduxjs/toolkit';
import {
  searchName,
  searchId,
  addCity,
  deleteCity,
  deleteError,
} from '../actions';

const initialState = {
  cities: [],
  city: {},
  error: null,
  loading: false,
};

const rootReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(searchName.pending, (state) => {
      state.loading = true;
    })
    .addCase(searchName.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload;
    })
    .addCase(searchName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(searchId.pending, (state) => {
      state.loading = true;
    })
    .addCase(searchId.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload;
    })
    .addCase(searchId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addCity, (state, action) => {
      state.cities = [...state.cities, action.payload];
    })
    .addCase(deleteCity, (state, action) => {
      state.cities = state.cities.filter((city) => city.id !== action.payload);
    })
    .addCase(deleteError, (state) => {
      state.error = null;
    })
);

export default rootReducer;
