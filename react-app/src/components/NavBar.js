
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Clock from './Clock/Clock';
import { useSelector } from 'react-redux';

const NavBar = () => {



  const session = useSelector(state => state.session);
  let user = session.user;




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

      <Clock></Clock>
      {user?.id&&<LogoutButton />}


    </nav>
  );
}

export default NavBar;
