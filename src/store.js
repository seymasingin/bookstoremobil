import { configureStore } from '@reduxjs/toolkit'
import favReducer from './features/favSlice'
import memberReducer from './features/memberSlice';
import quantityReducer from './features/quantitySlice';



export const store = configureStore({
  reducer: {
    favs: favReducer,
    members: memberReducer,
    quans: quantityReducer,
  },
})