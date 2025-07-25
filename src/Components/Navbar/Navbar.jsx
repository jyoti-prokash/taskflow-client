import React from 'react';

const Navbar = () => {
  const navItems = 
  <>
  <li><a>All Projects</a></li>
  <li><a>Add Project</a></li>
  <li><a>My Projects</a></li>
  </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <a className="font-bold text-blue-700 text-2xl">TaskFlow</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    <a className="btn btn-primary text-white font-bold">Login</a>
    <a className="btn btn-secondary font-bold">Logout</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;