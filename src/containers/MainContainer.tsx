import React, {useEffect} from 'react';
import axios from 'axios';
import { useAppDispatch } from '../redux/hooks';
import { addJob } from '../redux/jobSlice';
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
  const dispatch = useAppDispatch();
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

  const user_id = 1;

  const fetchAllApplications = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/all-apps`, {
          params: {
            user_id
          }
        });
        console.log('response from axios request to get all applications: ', response.data);
        const allJobs = response.data;
        allJobs.map((job : any) => {
          dispatch(addJob({...job}));
        })

      } catch (error) {
        console.error(error);
      }
    }; 
    fetchAllApplications();


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
