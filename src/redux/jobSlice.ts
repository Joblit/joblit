import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface for the initial state and each expected value
interface jobSliceInterface {
  jobTitle: string;
}

const initialState: jobSliceInterface = {
  jobTitle: 'default',
};

// Each reducer here connects with the 'job' slice of state that is tracked here
export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload;
    },
  },
});

// each action should be exported
export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;
