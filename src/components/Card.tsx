import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import JobModal from './JobModal';

type cardProps = {
  application_id: number;
  companyname: string;
  jobtitle: string;
  location: string;
};

const DisplayCard = (props: cardProps) => {
  const {application_id, companyname, jobtitle, location} = props;

  const cardStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    margin: '10px',
    fontSize: '15px',
  };

  const buttonStyle = {
    height: '20px',
  };

  return (
    <div className='card' style={cardStyle}>
      <label htmlFor={`jobModal${application_id}`} className='btn'>
        Details
      </label>
      <JobModal application_id={application_id} /> 
      <div className='card-body'>
        <div className='card-body-company'>{companyname}</div>
        <div className='card-body-position'>{jobtitle}</div>
        <div className='card-body-onsiteremote'>{location}</div>
      </div>
      <div className='editBtn'>
        <button style={buttonStyle}>...</button>
      </div>
    </div>
  );
};

export default DisplayCard;
