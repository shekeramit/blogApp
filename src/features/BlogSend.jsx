import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../config/Config";
const initialState = {
    blog: [],
    loading: false,
    error: null,
  };
//sending blog to server
export const CreateBlog = createAsyncThunk("blog", async (body) => {
    const response = await fetch(`${baseApi}/createblog`, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
    return await response.json();
  });

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder
        .addCase(CreateBlog.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(CreateBlog.fulfilled, (state, action) => {
          state.loading = false;
        })
        .addCase(CreateBlog.rejected, (state, action) => {
          state.loading = false;
        })
    },
  });
export default blogSlice.reducer;