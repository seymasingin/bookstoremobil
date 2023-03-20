import { configureStore } from '@reduxjs/toolkit'
import favReducer from './features/favSlice'
import memberReducer from './features/memberSlice';

export const store = configureStore({
  reducer: {
    favs: favReducer,
    members: memberReducer,
    //quantity: quantityReducer,
  },
})