// import action constants
import * as types from '../actionTypes';

export const addJob = (jobDetails: object) => ({
  type: types.ADD_JOB,
  payload: jobDetails,
});

export const deleteJob = (jobId: number) => ({
  type: types.DELETE_JOB,
  payload: jobId,
});
