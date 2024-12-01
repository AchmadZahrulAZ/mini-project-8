import { configureStore } from '@reduxjs/toolkit';
import postReducer from './async/postSlice'; // Import reducer dari postSlice

export const store = configureStore({
  reducer: {
    posts: postReducer, // Tambahkan reducer ke store
  },
});

