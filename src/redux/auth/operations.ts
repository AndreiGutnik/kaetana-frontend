import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://kaetana.onrender.com';

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const signUp = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, credentials);

    toast.success('Registration successful');

    return data;
  } catch (e) {
    const error = e as AxiosError;
    toast.error(error.message || 'Registration failed');

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post(`/api/auth/login`, credentials);

    setAuthHeader(data.token);

    toast.success('Login successful');

    return data;
  } catch (e) {
    const error = e as AxiosError;
    toast.error(error.message || 'Authorization failed');

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('/api/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(`/api/auth/logout`);
    clearAuthHeader();

    toast.success('You are logged out');
  } catch (e) {
    const error = e as AxiosError;
    toast.error(error.message || 'Something went wrong');

    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//   const { token } = thunkAPI.getState().auth;
//   if (!token) {
//     return thunkAPI.rejectWithValue('Not valid token');
//   }
//   setAuthHeader(token);
//   try {
//     const { data } = await axios.get('/api/user/current');
//     return data;
//   } catch (e) {
//     const error = e as AxiosError;
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const updateUserData = createAsyncThunk('api/user', async (body, thunkAPI) => {
//   const token = thunkAPI.getState().auth;
//   if (!token) {
//     return thunkAPI.rejectWithValue('Not valid token');
//   }
//   setAuthHeader(token);
//   try {
//     const { data } = await axios.patch('/api/user', body);
//     return data;
//   } catch (e) {
//     const error = e as AxiosError;
//     toast.error('Request error');
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
