import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '../features/media/mediaSlice'
export const store = configureStore({
  reducer: {
    medias:mediaReducer
  },
});
