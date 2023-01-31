import React from 'react';
import PropTypes from 'prop-types';
import { addJob } from '../redux/jobSlice';
import { useAppDispatch } from '../redux/hooks';

// current expected props:
// userId string
// addJob function that will take in the form information and the userId and bubble up to the container and be a dispatch

function AddJobModal(props: any) {
  const dispatch = useAppDispatch();

  function addJobFromModal(event: any) {
    // prevent the form from actually submitting
    event.preventDefault();
    // get the job title from the form value
    const jobTitle = event.target.jobTitle.value;
    // dispatch the action to the addJob fonctuon from the job Slice, pass in the jobTitle string
    dispatch(addJob(jobTitle));
  }
  return (
    <div className='modal'>
      <form id='addJobForm' onSubmit={addJobFromModal}>
        <label htmlFor='companyName'>Company Name</label>
        <input id='companyName' name='companyName' type='text' required></input>
        <label htmlFor='jobTitle'>Job Title</label>
        <input id='jobTitle' name='jobTitle' type='text' required></input>
        <label htmlFor='jobDescription'>Job Description</label>
        <input id='jobDescription' name='jobDescription' type='text'></input>
        <label htmlFor='location'>Location</label>
        <input id='location' name='location' type='text'></input>
        <label htmlFor='applicationDate'>Application Date</label>
        <input
          id='applicationDate'
          name='applicationDate'
          type='date'
          required
        ></input>
        <label htmlFor='salaryRange'>Salary Range</label>
        <input id='salaryRange' name='salaryRange' type='text'></input>
        <label htmlFor='contactPerson'>Contact Person</label>
        <input id='contactPerson' name='contactPerson' type='text'></input>
        <label htmlFor='contactEmail'>Contact Email</label>
        <input id='contactEmail' name='contactEmail' type='email'></input>
        <label htmlFor='benefits'>Benefits</label>
        <input id='benefits' name='benefits' type='text'></input>
        <label htmlFor='notes'>Notes</label>
        <input id='notes' name='notes' type='text'></input>
        <p>{props.user}</p>
        <input id='submit' type='submit' value='Add Job'></input>
      </form>
    </div>
  );
}

AddJobModal.propTypes = {
  userId: PropTypes.string,
  addJob: PropTypes.func,
};

export default AddJobModal;
