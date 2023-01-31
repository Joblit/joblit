import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-4xl">
          <span className="text-accent">job</span>
          <span>LIT</span>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-15 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="../assets/joblit_no_background.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    // <div className="navbar" style={navStyle}>
    //   <h1>Joblit</h1>
    //   <img
    //     src="../assets/joblit_no_background.png"
    //     alt="joblit logo"
    //     style={logoStyle}
    //   />
    // </div>
  );
};

export default Navbar;
