import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

type JobModalProps = {
  jobId: number;
};

function JobModal() {
  const jobDetails = useAppSelector(
    (state: RootState) => state.jobs.applications[0]
  );

  return (
    <div>
      <input type='checkbox' id='jobModal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <h2>Company Name: {jobDetails.companyName}</h2>
          <h3>Job Title: {jobDetails.jobTitle}</h3>
          <p>Job Description: {jobDetails.jobDescription}</p>
          <p>Location: {jobDetails.location}</p>
          <p>Application Date: {jobDetails.applicationDate}</p>
          <p>Salary: {jobDetails.salary}</p>
          <p>Contact Person: {jobDetails.contactPerson}</p>
          <p>Contact Email: {jobDetails.contactEmail}</p>
          <p>Benefits: {jobDetails.benefits}</p>
          <p>Notes: {jobDetails.notes}</p>
          <div className='modal-action'>
            <label htmlFor='jobModal' className='btn'>
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobModal;
