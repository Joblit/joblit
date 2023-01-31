import React from 'react';
import AddJobModal from './components/AddJobModal';
import JobModal from './components/JobModal';
import Login from './components/Login';

// Temp values for testing
const user = 'testUserId';
const jobModalProps = {
  companyName: 'Wegmans',
  jobTitle: 'Software Engineer',
  jobDescription: 'Do some code',
  location: 'Rochester, NY',
  applicationDate: Date.now(),
  salary: '120k - 140k',
  contactName: 'Danny',
  contactEmail: 'dannyWegman@gmail.com',
  benefits: '401k',
  notes: 'Seems decent',
};

const App = () => {
  return (
    <div>
      <Login />
      <h1>Macon</h1>
      <img src='../assets/joblit_no_background.png' />
      <JobModal
        companyName={jobModalProps.companyName}
        jobTitle={jobModalProps.jobTitle}
        jobDescription={jobModalProps.jobDescription}
        location={jobModalProps.location}
        applicationDate={jobModalProps.applicationDate}
        salary={jobModalProps.salary}
        contactName={jobModalProps.companyName}
        contactEmail={jobModalProps.contactEmail}
        benefits={jobModalProps.benefits}
        notes={jobModalProps.notes}
      />
      <AddJobModal userId={user} />
    </div>
  );
};

export default App;
