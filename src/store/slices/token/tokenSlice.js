import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("token") || null,
  expiresAt: localStorage.getItem("expiresAt") || null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, expiresAt } = action.payload;
      state.value = token;
      state.expiresAt = expiresAt;
      localStorage.setItem("token", token);
      localStorage.setItem("expiresAt", expiresAt);
    },
    logout: (state) => {
      state.value = null;
      state.expiresAt = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
    },
  }
});

export const { login, logout } = tokenSlice.actions;

export const selectToken = (state) => state.token.value;

export const selectTokenExpiresAt = (state) => state.token.expiresAt;

export default tokenSlice.reducer;







/* import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: 'token',
    initialState: { value: '', expiresAt: null },
    reducers: {
        login: (state, action) => {
            const { token, expiresAt } = action.payload;
            state.value = token;
            state.expiresAt = expiresAt;
        },
        logout: (state) => {
            state.value = '';
            state.expiresAt = null;
        }
    }
});

export const { login, logout } = tokenSlice.actions;

export const selectToken = (state) => state.token.value;

export const selectTokenExpiresAt = (state) => state.token.expiresAt;

export default tokenSlice.reducer; */