import {createAsyncThunk, createSlice, } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchBooks = createAsyncThunk('book/fetch', async () => {
  const response = await axios.get('https://api.itbook.store/1.0/new');
  return response.data.books;
});

  export const quantitySlice = createSlice({
    name: 'numbers',
    initialState : { 
      quantity: 0,
      allBooks: [],
    },

    reducers:{
        increase: (state, action) => {
          const itemId = action.payload; 
          const selected = state.allBooks.find((item) => item.id === itemId); 
          
            selected.quantity += 1;
          
    },
        decrease:(state, action) => {
          const itemId = action.payload; 
          const selected = state.allBooks.find((item) => item.id === itemId); 
          if (selected) {
            selected.quantity -= 1;
          }
        }
    },

    extraReducers: (builder) => {
      builder.addCase(fetchBooks.fulfilled, (state, action) => {
        state.allBooks.push(action.payload)
        
      })
    },
    
  })

 

  export default quantitySlice.reducer;
  export const {increase, decrease, extraReducers} = quantitySlice.actions;

