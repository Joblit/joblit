import React from 'react';
import MainContainer from './containers/MainContainer';
import Navbar from './containers/Navbar';
import './app.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default App;
