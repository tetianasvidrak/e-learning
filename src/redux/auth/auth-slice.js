import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setToken } from "../../axios/axios";

import { login } from "./auth-operations";

const initialState = {
  token: null,
  user: null,
  isLoggedIn: false,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.loading = "succeded";
      state.error = null;
      setToken(action.payload.token);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.loading = "rejected";
      state.error = action.payload.error;
    });
  },
});

const persistConfig = {
  key: "authentication",
  storage,
};

export const { logout } = authSlice.actions;

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
