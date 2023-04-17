import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    quantities: 0,
  }

  export const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers:{
        increment: (state, action) => {},
        decrement:(state, action) => {}
    }
  })

  export default quantitySlice.reducer;
  export const {increment, decrement} = quantitySlice.actions;