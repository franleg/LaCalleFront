import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    field: "",
    date: ""
}

export const dataSlice = createSlice({
    name: 'data',
    initialState: { value: initialValue },
    reducers: {
        setData: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;