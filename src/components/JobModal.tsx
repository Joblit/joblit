import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { RootState } from '../redux/store';
import { editStatus } from '../redux/jobSlice';

type jobModalProps = {
  application_id: number;
};

// Job modal that shows the details of a particular job
function JobModal(props: jobModalProps) {
  const { application_id } = props;
  const [statusState, setStatus] = useState('Applied');
  const dispatch = useAppDispatch();
  // Get the job details of the passed in jobId from state
  // const jobDetails = useAppSelector(
  //   (state: RootState) => state.jobs.applications[application_id]
  // );
  //   console.log('jobDetails from JobModal: ', jobDetails);
  function onStatusChange(event: any) {
    setStatus(event.target.value);
    const copy = JSON.parse(JSON.stringify(jobDetails));
    copy.status = statusState;
    dispatch(editStatus(copy));
  }

  const applications = useAppSelector(
    (state: RootState) => state.jobs.applications
  );

  let jobIndex: number;

  applications.forEach((job, index) => {
    if (job.application_id === application_id) {
      jobIndex = index;
    }
  });

  const jobDetails = useAppSelector(
    (state: RootState) => state.jobs.applications[jobIndex]
  );

  return (
    <div>
      <input
        type='checkbox'
        id={`jobModal${application_id}`}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <h2 className='text-lg'>Company Name: {jobDetails.companyname}</h2>
          <h3 className='text-lg'>Job Title: {jobDetails.jobtitle}</h3>
          <p>Job Description: {jobDetails.jobdescription}</p>
          <p>Location: {jobDetails.location}</p>
          <p>Application Date: {jobDetails.applicationdate}</p>
          <p>Salary: {jobDetails.salary}</p>
          <p>Contact Person: {jobDetails.contactperson}</p>
          <p>Contact Email: {jobDetails.contactemail}</p>
          <p>Benefits: {jobDetails.benefits}</p>
          <p>Notes: {jobDetails.notes}</p>
          <form>
            <fieldset>
              <div>
                <input
                  type='radio'
                  id='statusActive'
                  name='status'
                  value='Active'
                  checked={status === 'Active'}
                  onChange={onStatusChange}
                />
                <label htmlFor='statusActive'>Active</label>
                <input
                  type='radio'
                  id='statusInterview'
                  name='status'
                  value='Interview'
                  checked={status === 'Interview'}
                  onChange={onStatusChange}
                />
                <label htmlFor='statusInterview'>Interview</label>
                <input
                  type='radio'
                  id='statusOffer'
                  name='status'
                  value='Offer'
                  checked={status === 'Offer'}
                  onChange={onStatusChange}
                />
                <label htmlFor='statusOffer'>Offer</label>
                <input
                  type='radio'
                  id='statusRejected'
                  name='status'
                  value='Rejected'
                  checked={status === 'Rejected'}
                  onChange={onStatusChange}
                />
                <label htmlFor='statusRejected'>Rejected</label>
                {/* <input type='submit' className='btn' value='Change Status' /> */}
              </div>
            </fieldset>
          </form>
          <div className='modal-action'>
            <label htmlFor={`jobModal${application_id}`} className='btn'>
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobModal;
