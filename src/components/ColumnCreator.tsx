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

const ColumnCreator = (props: titleProps) => {
  const applicationsList = useAppSelector(
    (state: RootState) => state.jobs.applications
  );


  const rows = applicationsList.map((item, index) => {
    if (item.status === props.title) {
      return (
        <Card
          key={index}
          application_id={item.application_id}
          companyname={item.companyname}
          jobtitle={item.jobtitle}
          location={item.location}
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
