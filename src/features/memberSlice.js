import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people:[]
}

export const memberSlice = createSlice({
    name: "member",
    initialState,
    reducers:{
        addMember: (state,action) => {
            state.favourites = [...state.people, action.payload];
        },
        removeMember: (state,action) => {}
    }
})

export default memberSlice.reducer;
export const {addMember, removeMember} = memberSlice.actions;