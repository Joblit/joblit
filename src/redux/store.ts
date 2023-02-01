import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    // additional reducers go here
    jobs: jobReducer,
    user: userReducer,
  },
});

// // Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {jobs: jobReducer}
export type AppDispatch = typeof store.dispatch;
