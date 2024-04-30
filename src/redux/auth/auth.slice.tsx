import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { User } from '../types';

import { logIn, logOut, signUp } from './operations';

interface initialStateAuthType {
  user: User | null;
  token: string;
  isLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: initialStateAuthType = {
  user: null,
  token: '',
  isLoggedIn: false,
  isLoading: false,
};

const handleRejected = (state: initialStateAuthType) => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signUp.rejected, handleRejected)

      .addCase(logIn.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, _) => {
        state.isLoading = false;
        state.user = null;
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected);

    // .addCase(updateUserData.pending, (state, _) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateUserData.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // })
    // .addCase(updateUserData.rejected, handleRejected)

    // .addCase(refreshUser.pending, (state, _) => {
    //   state.isLoading = true;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // })
    // .addCase(refreshUser.rejected, handleRejected);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

// export default authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
