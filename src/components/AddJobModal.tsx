import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { addJob } from '../redux/jobSlice';
import { useAppDispatch } from '../redux/hooks';

function AddJobModal(props: any) {
  // const {user_id } = props;
  const user_id = 1;
  const dispatch = useAppDispatch();
  // jobID value that will increment with each application added
  // let jobId = 0;

  function addJobFromModal(event: any) {
    // prevent the form from actually submitting
    event.preventDefault();
    // get the job details from the form
    const companyname = event.target.companyName.value;
    const jobtitle = event.target.jobTitle.value;
    const jobdescription = event.target.jobDescription.value;
    const location = event.target.location.value;
    const applicationdate = event.target.applicationDate.value;
    const salary = event.target.salary.value;
    const contactperson = event.target.contactPerson.value;
    const contactemail = event.target.contactEmail.value;
    const benefits = event.target.benefits.value;
    const notes = event.target.notes.value;

    // reset form values after submission
    for (let i = 0; i < event.target.children.length; i++) {
      event.target.children[i].value = '';
    }

    let application_id = 0;
    const status = 'Applied'

    axios
      .post('/new-app', {
        user_id,
        companyname,
        jobtitle,
        jobdescription,
        location,
        applicationdate,
        salary,
        contactperson,
        contactemail,
        benefits,
        notes,
        status
      })
      .then((response) => {
        console.log('new job added! application_id:', response.data);
        application_id = response.data;
      })
      .catch((error) => {
        console.error('error adding new job: ', error);
      });

    // dispatch the action to the addJob functuon from the job Slice, pass in the jobTitle string
    dispatch(
      addJob({
        user_id,
        application_id,
        companyname,
        jobtitle,
        jobdescription,
        location,
        applicationdate,
        salary,
        contactperson,
        contactemail,
        benefits,
        notes,
        status
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
