import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface for the initial state and each expected value
interface jobSliceInterface {
  companyName: string;
  jobTitle: string;
  jobDescription?: string;
  location?: string;
  applicationDate?: string;
}

const initialState: jobSliceInterface = {
  companyName: '',
  jobTitle: '',
  jobDescription: '',
  location: '',
  applicationDate: '',
};

// Each reducer here connects with the 'job' slice of state that is tracked here
export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<jobSliceInterface>) => {
      state.companyName = action.payload.companyName;
      state.jobTitle = action.payload.jobTitle;
      state.jobDescription = action.payload.jobDescription;
      state.location = action.payload.location;
      state.applicationDate = action.payload.applicationDate;
    },
  },
});

// each action should be exported
export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;
