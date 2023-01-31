import React from 'react';
import AddJobModal from './components/AddJobModal';
import JobModal from './components/JobModal';
import Login from './components/Login';

// Temp values for testing
const user = 'testUserId';

const App = () => {
  return (
    <div>
      <Login />
      <h1>Macon</h1>
      <img src='../assets/joblit_no_background.png' />
      <JobModal />
      <AddJobModal userId={user} />
    </div>
  );
};

export default App;
