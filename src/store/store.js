import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slices/data";
import { authSlice } from "./slices/auth";
import { userSlice } from "./slices/user";
import { tokenSlice } from "./slices/token";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        auth: authSlice.reducer,
        token: tokenSlice.reducer,
        user: userSlice.reducer,
    }
})

