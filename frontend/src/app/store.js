import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '../features/media/mediaSlice'
import filterReducer from '../features/filter/filterSlice'
import authReducers from '../features/auth/authSlice'
import searchReducer from '../features/search/searchSlice'
export const store = configureStore({
  reducer: {
    auth: authReducers,
    medias:mediaReducer,
    filterMedia:filterReducer,
    searchMedia:searchReducer
  },
});
