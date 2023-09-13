import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slices/data";
import { authSlice } from "./slices/auth";
import { sessionSlice } from "./slices/session";
import { reservationSlice } from "./slices/reservation";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        auth: authSlice.reducer,
        session: sessionSlice.reducer,
        reservation: reservationSlice.reducer,
    }
})

