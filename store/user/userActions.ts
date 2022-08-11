import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = (await AuthService.register(formData)).data;
      // localStorage.setItem("Token", response.token);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (formData: any, { rejectWithValue }) => {
    try {
      const response = (await AuthService.login(formData)).data;
      // localStorage.setItem("Token", response.token);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
