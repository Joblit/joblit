// createStore is depricated for redux, it recommends redux toolkit for configuring the store
import { configureStore } from '@reduxjs/toolkit';
import columnsSlice from './reducers/columnsSlice';
// // import in the reducers we will be using

export const store = configureStore({
  reducer: {
    // I don't know what reducers we actually want here
    columns: columnsSlice,
  },
});

// // Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {users: UsersState, applications: applicationsState}
export type AppDispatch = typeof store.dispatch;
