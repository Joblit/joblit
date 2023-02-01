import React from 'react';
import MainContainer from './containers/MainContainer';
import Navbar from './containers/Navbar';
import { checkLoggedIn } from './authFunctions';
import './app.css';
import { redirect } from 'react-router-dom';

const App = () => {
  // if the user isn't logged in, redirect to the login page
  let loginStatus = checkLoggedIn();
  if (!loginStatus) {
    redirect('/login');
  }

  return (
    <div>
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default App;
