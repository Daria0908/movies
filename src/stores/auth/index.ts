import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../models/IAuth';

const initialState: IAuthState = {
  isLogged: false,
  hardcodedLogin: 'admin',
  hardcodedPassword: 'admin'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isLogged = true;
    },
    loggedOut: (state) => {
      state.isLogged = false;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

export default authSlice.reducer;
