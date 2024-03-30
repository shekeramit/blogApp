// BlogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseApi from '../config/Config';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs',async () => {
    const response = await axios.get(`${baseApi}/takeblog`);
    return response.data;
  }
);

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    callouts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.callouts = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
