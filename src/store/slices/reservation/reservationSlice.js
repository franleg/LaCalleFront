import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: localStorage.getItem('ReservedDate') || null,
  field: localStorage.getItem('ReservedField') || null,
  price: localStorage.getItem('ReservedPrice') || null,
  time: JSON.parse(localStorage.getItem('ReservedTime')) || null,
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setReservation: (state, action) => {
      const { date, field, price, time } = action.payload;
      state.date = date;
      state.field = field;
      state.price = price;
      state.time = time;

      localStorage.setItem('ReservedDate', date);
      localStorage.setItem('ReservedField', field);
      localStorage.setItem('ReservedPrice', price);
      localStorage.setItem('ReservedTime', JSON.stringify(time));
    },
  },
});

export const { setReservation } = reservationSlice.actions;

export const selectReservation = (state) => state.reservation;

export default reservationSlice.reducer;