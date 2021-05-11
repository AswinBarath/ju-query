import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import queryReducer from '../features/querySlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
  },
});
