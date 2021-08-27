
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to='/' exact={true} activeClassName='active'>
        Home
      </Link>

      <Link to='/login' exact={true} activeClassName='active'>
        Login
      </Link>

      <Link to='/sign-up' exact={true} activeClassName='active'>
        Sign Up
      </Link>

      <Link to='/projects' exact={true} activeClassName='active'>
        Projects
      </Link>

      <LogoutButton />
    </nav>
  );
}

export default NavBar;
