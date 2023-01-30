import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ColumnState {
  status: string;
}

const initialState: ColumnState = {
  status: 'applied',
};

export const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = columnSlice.actions;

export default columnSlice.reducer;
