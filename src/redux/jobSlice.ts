import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface for the initial state and each expected value
interface ActionInterface {
  jobId: number;
  companyName: string;
  jobTitle: string;
  jobDescription?: string;
  location?: string;
  applicationDate?: string;
  salary?: string;
  contactPerson?: string;
  contactEmail?: string;
  benefits?: string;
  notes?: string;
}

interface jobSliceState {
  applications: ActionInterface[];
}

const initialState: jobSliceState = {
  applications: [
    {
      jobId: 0,
      companyName: '',
      jobTitle: '',
    },
  ],
};

// Each reducer here connects with the 'job' slice of state that is tracked here
export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<ActionInterface>) => {
      state.applications.push(action.payload);
      console.log('updated applications');
    },
  },
});

// each action should be exported
export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;
