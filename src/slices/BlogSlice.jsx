import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    blog: [],
    loading: false,
    error: null,
  };

export const CreateBlog = createAsyncThunk("blog", async (body) => {
    const response = await fetch("http://localhost:8080/creteblog", {
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