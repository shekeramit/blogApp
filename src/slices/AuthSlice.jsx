import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../config/Config";
const initialState = {
  auth: null,
  loading: false,
  error: null,
};

// signup
export const SingupUser = createAsyncThunk("auth/signup", async (body) => {
  const response = await fetch(`${baseApi}/signup`, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  });
  return await response.json();
});

//   login
export const loginuser = createAsyncThunk("auth/login", async (body) => {
  const response = await fetch(`${baseApi}/login`, {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  });
  return await response.json();
});

//   slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    singout: (state, action) => {
      state.user = localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SingupUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SingupUser.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("email", JSON.stringify(action.meta.arg.email));
        console.log(state);
      })
      .addCase(SingupUser.rejected, (state, action) => {
        state.loading = false;
      })
      
      // login
      .addCase(loginuser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.loading = false;
        const { token } = action.payload;
        console.log(action.payload);
        state.token = token;
        localStorage.setItem("token", JSON.stringify(token));
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { addToken, addUser, singout } = authSlice.actions;
export default authSlice.reducer;