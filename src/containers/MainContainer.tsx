import React from 'react';
import AddJobModal from '../components/AddJobModal';
import Columns from '../components/ColumnCreator';
import JobModal from '../components/JobModal';

const divStyle: {} = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',
};

const MainContainer = () => {
  const dummyInfo = [
    {
      title: 'Applied',
    },
    {
      title: 'Interview',
    },
    {
      title: 'Rejected',
    },
    {
      title: 'Offer',
    },
  ];

  const rows = dummyInfo.map((item, index) => {
    return <Columns key={index} title={item.title} />;
  });

  return (
    <div>
      <div className='columns-container' style={divStyle}>
        {rows}
      </div>
      <div className='column-btn'>
        <button>+</button>
      </div>
      <label htmlFor='addJobModal' className='btn'>
        Add Application
      </label>
      <AddJobModal />
    </div>
  );
};

export default MainContainer;
