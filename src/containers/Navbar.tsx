import React from 'react';
const navStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const logoStyle = {
  height: '200px',
  width: '200px',
  margin: '10px',
};

const Navbar = () => {
  return (
    <div className="nav-container" style={navStyle}>
      <h1>Joblit</h1>
      <img
        src="../assets/joblit_no_background.png"
        alt="joblit logo"
        style={logoStyle}
      />
    </div>
  );
};

export default Navbar;
