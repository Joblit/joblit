import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import Card from './Card';

type titleProps = {
  title: string;
};

const columnStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  border: '1px solid black',
  borderRadius: '5px',
  margin: '10px',
  width: '200px',
  height: 'auto',
};

// grab application from the database on first render
function getApplications() {
  fetch('/applications');
}

const ColumnCreator = (props: titleProps) => {
  const applicationsList = useAppSelector(
    (state: RootState) => state.jobs.applications
  );

  const rows = applicationsList.map((item, index) => {
    console.log('jobId: ', item.jobId);
    if (item.status === props.title) {
      return (
        <Card
          key={index}
          jobId={item.jobId}
          company={item.companyName}
          position={item.jobTitle}
          onSiteRemote={item.location}
        />
      );
    }
  });

  return (
    <div className='column' style={columnStyle}>
      <div className='text-secondary'>{props.title}</div>
      <div className='column-body'>
        <div className='column-body-content'>{rows}</div>
      </div>
    </div>
  );
};

export default ColumnCreator;
