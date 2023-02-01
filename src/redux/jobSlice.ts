import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface for the initial state and each expected value
interface ActionInterface {
  user_id: number,
  application_id: number;
  companyname: string;
  jobtitle: string;
  jobdescription?: string;
  location: string;
  applicationdate?: string;
  salary?: string;
  contactperson?: string;
  contactemail?: string;
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
      user_id: 0,
      application_id: 0,
      companyname: '',
      jobtitle: '',
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
      // action.payload.status = 'Applied';
      state.applications.push(action.payload);
    },
  },
});

// each action should be exported
export const { addJob } = jobSlice.actions;
export default jobSlice.reducer;
