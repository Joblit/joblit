import { configureStore } from '@reduxjs/toolkit';
import columnReducer from './reducers/columnsSlice';
// import in the reducers we will be using

export const store = configureStore({
  reducer: {
    column: columnReducer,
    // users: usersReducer,
    // applications: applicationsReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState, applications: applicationsState}
export type AppDispatch = typeof store.dispatch;
