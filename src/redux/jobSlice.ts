import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface for the initial state and each expected value
interface ActionInterface {
  jobId: number;
  companyName: string;
  jobTitle: string;
  jobDescription?: string;
  location: string;
  applicationDate?: string;
  salary?: string;
  contactPerson?: string;
  contactEmail?: string;
  benefits?: string;
  notes?: string;
  status?: 'Applied' | 'Interview' | 'Rejected' | 'Offer';
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
      location: '',
    },
  ],
};

// Each reducer here connects with the 'job' slice of state that is tracked here
export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<ActionInterface>) => {
      action.payload.status = 'Applied';
      state.applications.push(action.payload);
    },
  },
});

// each action should be exported
export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;
