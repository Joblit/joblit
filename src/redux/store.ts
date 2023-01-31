import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';

export const store = configureStore({
  reducer: {
    // additional reducers go here
    jobs: jobReducer,
  },
});

// // Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {jobs: jobReducer}
export type AppDispatch = typeof store.dispatch;
