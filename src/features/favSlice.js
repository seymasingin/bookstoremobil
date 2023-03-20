import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favourites: [],
}

export const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers:{
        add: (state, action) => {
            state.favourites = [...state.favourites, action.payload];
        },
        remove: (state,action) => {
            state.favourites = action.payload
        }
    }
})
 
export default favSlice.reducer;
export const {add, remove} = favSlice.actions;