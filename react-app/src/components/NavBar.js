
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to='/'  className="navlink">
        Home
      </Link>

      {/* <Link to='/login'  className="">
        Login
      </Link>

      <Link to='/sign-up'  className="">
        Sign Up
      </Link> */}

      <Link to='/projects'  className="navlink">
        Projects
      </Link>

      <LogoutButton />
    </nav>
  );
}

export default NavBar;
