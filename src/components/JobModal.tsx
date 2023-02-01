import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

type jobModalProps = {
  jobId: number;
};

// Job modal that shows the details of a particular job
function JobModal(props: jobModalProps) {
  // Get the job details of the passed in jobId from state
  const jobDetails = useAppSelector(
    (state: RootState) => state.jobs.applications[props.jobId]
  );

  return (
    <div>
      <input
        type='checkbox'
        id={`jobModal${props.jobId}`}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <h2 className='text-lg'>Company Name: {jobDetails.companyName}</h2>
          <h3 className='text-lg'>Job Title: {jobDetails.jobTitle}</h3>
          <p>Job Description: {jobDetails.jobDescription}</p>
          <p>Location: {jobDetails.location}</p>
          <p>Application Date: {jobDetails.applicationDate}</p>
          <p>Salary: {jobDetails.salary}</p>
          <p>Contact Person: {jobDetails.contactPerson}</p>
          <p>Contact Email: {jobDetails.contactEmail}</p>
          <p>Benefits: {jobDetails.benefits}</p>
          <p>Notes: {jobDetails.notes}</p>
          <div className='modal-action'>
            <label htmlFor={`jobModal${props.jobId}`} className='btn'>
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobModal;
