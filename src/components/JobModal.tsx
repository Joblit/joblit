import React from 'react';
import PropTypes from 'prop-types';

function JobModal(props: any) {
  return (
    <div className='modal'>
      <h2>Company Name: {props.companyName}</h2>
      <h3>Job Title: {props.jobTitle}</h3>
      <p>Job Description: {props.jobDescription}</p>
      <p>Location: {props.location}</p>
      <p>Application Date: {props.applicationDate}</p>
      <p>Salary: {props.salary}</p>
      <p>Contact Person: {props.contactName}</p>
      <p>Contact Email: {props.contactEmail}</p>
      <p>Benefits: {props.benefits}</p>
      <p>Notes: {props.notes}</p>
    </div>
  );
}

JobModal.propTypes = {
  companyName: PropTypes.string,
  jobTitle: PropTypes.string,
  jobDescription: PropTypes.string,
  location: PropTypes.string,
  applicationDate: PropTypes.number,
  salary: PropTypes.string,
  contactName: PropTypes.string,
  contactEmail: PropTypes.string,
  benefits: PropTypes.string,
  notes: PropTypes.string,
};

export default JobModal;
