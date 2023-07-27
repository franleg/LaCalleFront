import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    field: localStorage.getItem("Field") || null,
    date: localStorage.getItem("Date") || null,
  };

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setField: (state, action) => {
            const field = action.payload;
            state.field = field;
            localStorage.setItem("Field", field);
        },
        setDate: (state, action) => {
            const date = action.payload;
            state.date = date;
            localStorage.setItem("Date", date);
        }
    },
})

export const { setField, setDate, setTime } = dataSlice.actions;

export const selectedField = (state) => state.data.field;
export const selectedDate = (state) => state.data.date;

export default dataSlice.reducer;