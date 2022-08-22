import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '../features/media/mediaSlice'
import filterReducer from '../features/filter/filterSlice'
import authReducers from '../features/auth/authSlice'
export const store = configureStore({
  reducer: {
    auth: authReducers,
    medias:mediaReducer,
    filterMedia:filterReducer
  },
});
