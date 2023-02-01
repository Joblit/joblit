import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

type jobModalProps = {
  application_id: number;
};

// Job modal that shows the details of a particular job
function JobModal(props: jobModalProps) {
  const {application_id} = props;
  // Get the job details of the passed in jobId from state
  // const jobDetails = useAppSelector(
  //   (state: RootState) => state.jobs.applications[application_id]
  // );
  //   console.log('jobDetails from JobModal: ', jobDetails);

    const applications = useAppSelector(
    (state: RootState) => state.jobs.applications
  );

    let jobIndex: number;

    applications.forEach((job, index)=> {
      if(job.application_id === application_id) {
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
