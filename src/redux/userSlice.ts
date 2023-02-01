import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';

interface userSliceState {
    username: string;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string
}


const initialState : userSliceState = {
        username: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState
  reducers: {},
});

export default userSlice.reducer;
export const userSelector = (state : RootState) => state.user
