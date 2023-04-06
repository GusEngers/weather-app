import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchName = createAsyncThunk(
  'search-name',
  async (name, { rejectWithValue }) => {
    try {
      return await axios
        .get(`/weather?q=${name}&appid=${API_KEY}&units=metric`)
        .then((res) => res.data);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const searchId = createAsyncThunk(
  'search-id',
  async (id, { rejectWithValue }) => {
    try {
      return await axios
        .get(`/weather?id=${id}&appid=${API_KEY}&units=metric`)
        .then((res) => res.data);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const addCity = createAction('add-city');

export const deleteCity = createAction('delete-city');

export const deleteError = createAction('delete-error');
