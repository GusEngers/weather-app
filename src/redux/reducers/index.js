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
};

const rootReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(searchName.fulfilled, (state, action) => {
      state.city = action.payload;
    })
    .addCase(searchName.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(searchId.fulfilled, (state, action) => {
      state.city = action.payload;
    })
    .addCase(searchId.rejected, (state, action) => {
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
