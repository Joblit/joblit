import React from 'react';
import MainContainer from './containers/MainContainer';
import Navbar from './containers/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="bg-base-100 h-screen">
      <Navbar />
      <MainContainer />
    </div>
  );
};

export default App;
