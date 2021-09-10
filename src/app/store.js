import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import questionReducer from "../features/questionSlice";

// Reducer is a pure function that takes an action and the previous state of the 
// application and returns the new state

export default configureStore({
  reducer: {
    user: userReducer,
    question:questionReducer,
  },
});
