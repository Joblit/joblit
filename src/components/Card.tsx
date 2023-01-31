import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import JobModal from './JobModal';

type cardProps = {
  jobId: number;
  company: string;
  position: string;
  onSiteRemote: string;
};

const DisplayCard = (props: cardProps) => {
  console.log('in the display card function');
  console.log('props.jobId: ', props.jobId);

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
      <label htmlFor={`jobModal${props.jobId}`} className='btn'>
        Details
      </label>
      <JobModal jobId={props.jobId} />
      <div className='card-body'>
        <div className='card-body-company'>{props.company}</div>
        <div className='card-body-position'>{props.position}</div>
        <div className='card-body-onsiteremote'>{props.onSiteRemote}</div>
      </div>
      <div className='editBtn'>
        <button style={buttonStyle}>...</button>
      </div>
    </div>
  );
};

export default DisplayCard;
