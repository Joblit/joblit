import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Modal() {
  const jobTitle = useSelector((state: RootState) => state.jobs.jobTitle);
  console.log(jobTitle);
  return (
    <div>
      <h2>in the Modal</h2>
      <p>{jobTitle}</p>
    </div>
  );
}

export default Modal;
