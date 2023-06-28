import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    first_name: "",
    last_name: "",
    age: null,
    adress: "",
    phone: "",
    email: "",
    password: "",
    avatar: "",
    role: "",
    cart: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialValue },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;