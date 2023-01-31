import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

function JobModal() {
  const companyName = useAppSelector(
    (state: RootState) => state.jobs.companyName
  );
  const jobTitle = useAppSelector((state: RootState) => state.jobs.jobTitle);
  const jobDescription = useAppSelector(
    (state: RootState) => state.jobs.jobDescription
  );
  const location = useAppSelector((state: RootState) => state.jobs.location);
  const applicationDate = useAppSelector(
    (state: RootState) => state.jobs.applicationDate
  );
  return (
    <div className='modal'>
      <h2>Company Name: {companyName}</h2>
      <h3>Job Title: {jobTitle}</h3>
      <p>Job Description: {jobDescription}</p>
      <p>Location: {location}</p>
      <p>Application Date: {applicationDate}</p>
      {/* <p>Salary: {props.salary}</p>
      <p>Contact Person: {props.contactName}</p>
      <p>Contact Email: {props.contactEmail}</p>
      <p>Benefits: {props.benefits}</p>
      <p>Notes: {props.notes}</p> */}
    </div>
  );
}

export default JobModal;
