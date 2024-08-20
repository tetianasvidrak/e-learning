import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from "./auth-api";

export const login = createAsyncThunk(
  "auth/login",
  async (signInData, thunkAPI) => {
    try {
      const user = await signIn(signInData);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data,
      });
    }
  }
);
