import { createSlice } from '@reduxjs/toolkit';

const storedAuthState = localStorage.getItem("authState");
const parsedAuthState = storedAuthState ? JSON.parse(storedAuthState) : null;

const initialValue = {
  isAuthenticated: parsedAuthState ? parsedAuthState.isAuthenticated : false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialValue,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("authState");
    },
    expireToken: (state) => {
        state.isAuthenticated = false;
        localStorage.removeItem('token');
    },
  },
});

export const { login, logout, expireToken } = authSlice.actions;

export default authSlice.reducer;
