import React from 'react';
import PropTypes from 'prop-types';
import { addJob } from '../redux/jobSlice';
import { useAppDispatch } from '../redux/hooks';

function AddJobModal(props: any) {
  const dispatch = useAppDispatch();
  // jobID value that will increment with each application added
  let jobId = 0;

  function addJobFromModal(event: any) {
    // prevent the form from actually submitting
    event.preventDefault();
    // get the job details from the form
    const companyName = event.target.companyName.value;
    const jobTitle = event.target.jobTitle.value;
    const jobDescription = event.target.jobDescription.value;
    const location = event.target.location.value;
    const applicationDate = event.target.applicationDate.value;
    const salary = event.target.salary.value;
    const contactPerson = event.target.contactPerson.value;
    const contactEmail = event.target.contactEmail.value;
    const benefits = event.target.benefits.value;
    const notes = event.target.notes.value;

    // reset form values after submission
    for (let i = 0; i < event.target.children.length; i++) {
      event.target.children[i].value = '';
    }

    jobId++;
    // dispatch the action to the addJob functuon from the job Slice, pass in the jobTitle string
    dispatch(
      addJob({
        jobId,
        companyName,
        jobTitle,
        jobDescription,
        location,
        applicationDate,
        salary,
        contactPerson,
        contactEmail,
        benefits,
        notes,
      })
    );
  }
  return (
    <div>
      <input type='checkbox' id='addJobModal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <form
            id='addJobForm'
            onSubmit={addJobFromModal}
            className='flex flex-col'
          >
            <label htmlFor='companyName'>Company Name</label>
            <input
              id='companyName'
              name='companyName'
              type='text'
              required
            ></input>
            <label htmlFor='jobTitle'>Job Title</label>
            <input id='jobTitle' name='jobTitle' type='text' required></input>
            <label htmlFor='jobDescription'>Job Description</label>
            <input
              id='jobDescription'
              name='jobDescription'
              type='text'
            ></input>
            <label htmlFor='location'>Location</label>
            <input id='location' name='location' type='text'></input>
            <label htmlFor='applicationDate'>Application Date</label>
            <input
              id='applicationDate'
              name='applicationDate'
              type='date'
              required
            ></input>
            <label htmlFor='salary'>Salary Range</label>
            <input id='salary' name='salaryRange' type='text'></input>
            <label htmlFor='contactPerson'>Contact Person</label>
            <input id='contactPerson' name='contactPerson' type='text'></input>
            <label htmlFor='contactEmail'>Contact Email</label>
            <input id='contactEmail' name='contactEmail' type='email'></input>
            <label htmlFor='benefits'>Benefits</label>
            <input id='benefits' name='benefits' type='text'></input>
            <label htmlFor='notes'>Notes</label>
            <input id='notes' name='notes' type='text'></input>
            <p>{props.user}</p>
            <div className='modal-action'>
              <input
                className='btn'
                id='submit'
                type='submit'
                value='Add Job'
              ></input>
              <label htmlFor='addJobModal' className='btn'>
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

AddJobModal.propTypes = {
  userId: PropTypes.string,
  addJob: PropTypes.func,
};

export default AddJobModal;
