import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '../features/media/mediaSlice'
import filterReducer from '../features/filter/filterSlice'
export const store = configureStore({
  reducer: {
    medias:mediaReducer,
    filterMedia:filterReducer
  },
});
