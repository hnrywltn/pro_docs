import React from 'react';
// import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import { useDispatch } from 'react-redux';
import './splash.css'

function Splash() {

  const dispatch = useDispatch();
  const history = useHistory();




  const demoClick =  async () =>{
    await dispatch(login('demo@aa.io', 'password'));
    return history.push('/');
  }

  return (
    <div className="splashpage">
      <h1 className="title">pro_docs</h1>
      <div className="splashabout">
          pro_docs is an app that can help you track your projects in a user friendly way.
          choose technologies, build your resource collection, and find others on gitHub.

      </div>
      <div className="icon-container">
        <img src="https://i.imgur.com/ypzl1sH.png" alt="icon"/>
      </div>
      <Link className="splashLogin" to="/login">
        {/* <img src="https://i.imgur.com/xftZfBi.png" alt="login"/> */}
        Login
      </Link>
      <Link className="splashSignup" to="/sign-up">
        SignUp
      </Link>
      <button
        className="demobttn"
        onClick={demoClick}
      >
        DEMO
      </button>
      <a href="https://www.linkedin.com/in/henry-walton-324977187/" target="_blank" rel="noreferrer" className="splashLinkedin">
        <img src="https://i.imgur.com/yHgUB15.png" alt="linkedin"/>
      </a>
      <a href="https://github.com/hnrywltn/pro_docs" target="_blank" rel="noreferrer" className="splashgithub">
        <img src="https://i.imgur.com/35z8Aim.png" alt="github"/>
      </a>
    </div>
  );
}
export default Splash;
