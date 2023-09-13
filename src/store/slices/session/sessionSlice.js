import { createSlice } from "@reduxjs/toolkit";

// Función auxiliar para obtener datos del localStorage de manera segura
const getLocalStorageItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`Error al obtener el valor de "${key}" del localStorage:`, error);
    return null;
  }
};

const userFromLocalStorage = getLocalStorageItem("user");
const parsedUser = userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;

const initialState = {
  token: getLocalStorageItem("token") || null,
  expiresAt: getLocalStorageItem("expiresAt") || null,
  user: parsedUser,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, expiresAt, loginUser } = action.payload;

      // Actualizar el estado con los datos del usuario autenticado
      state.token = token;
      state.expiresAt = expiresAt;
      state.user = loginUser;

      // Almacenar los datos en el localStorage para persistencia
      localStorage.setItem("token", token);
      localStorage.setItem("expiresAt", expiresAt);
      localStorage.setItem("user", JSON.stringify(loginUser));
    },

    logout: (state) => {
      // Limpiar el estado y el localStorage al cerrar sesión
      state.token = null;
      state.expiresAt = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
      localStorage.removeItem("user");
    },
  }
});

export const { login, logout } = sessionSlice.actions;

// Selectores para acceder a los datos almacenados en el estado
export const selectToken = (state) => state.session.token;
export const selectTokenExpiresAt = (state) => state.session.expiresAt;
export const selectUser = (state) => state.session.user;

export default sessionSlice.reducer;