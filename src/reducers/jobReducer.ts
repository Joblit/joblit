import { ADD_JOB, DELETE_JOB } from '../actionTypes';

const initialState = {};

// TODO: fix 'any' type later
export default function (state = initialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case ADD_JOB:
      return { jobDetails: payload };

    case DELETE_JOB:
      return { jobDetails: '' };

    default:
      return state;
  }
}
