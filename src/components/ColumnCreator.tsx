import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddJobModal from './AddJobModal';
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

const dummyCardInfo = [
  {
    jobId: 1,
    company: 'Google',
    position: 'Software Engineer',
    onSiteRemote: 'remote',
    status: 'Applied',
  },
  {
    jobId: 2,
    company: 'Shopify',
    position: 'Software Engineer',
    onSiteRemote: 'remote',
    status: 'Applied',
  },
  {
    jobId: 3,
    company: 'Amazon',
    position: 'Software Engineer',
    onSiteRemote: 'on-site',
    status: 'Interview',
  },
  {
    jobId: 4,
    company: 'Microsoft',
    position: 'Software Engineer II',
    onSiteRemote: 'hybrid',
    status: 'Rejected',
  },
  {
    jobId: 5,
    company: 'Netflix',
    position: 'Software Engineer',
    onSiteRemote: 'remote',
    status: 'Offer',
  },
];

const ColumnCreator = (props: titleProps) => {
  const rows = dummyCardInfo.map((item, index) => {
    if (item.status === props.title) {
      return (
        <Card
          key={index}
          jobId={item.jobId}
          company={item.company}
          position={item.position}
          onSiteRemote={item.onSiteRemote}
        />
      );
    }
  });

  return (
    <div className='column' style={columnStyle}>
      <div className='text-secondary'>{props.title}</div>
      <label htmlFor='addJobModal' className='btn'>
        Add Application
      </label>
      <AddJobModal />
      <div className='column-body'>
        <div className='column-body-content'>{rows}</div>
      </div>
    </div>
  );
};

export default ColumnCreator;
