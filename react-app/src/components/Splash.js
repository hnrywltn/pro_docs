import React from 'react';
// import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../store/session';
import { useDispatch } from 'react-redux';

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
      <div className="about">
        <p>
          pro_docs is an app that can help you stay organized while planning a project.
        </p>
        <p>
          choose technologies, build your user stories, database schemas, and get documentation including readmes'.
        </p>
      </div>
      <div className="icon-container">
        <img src="https://i.imgur.com/ypzl1sH.png" alt="icon"/>
      </div>
      <Link to="/login">
        <img src="https://i.imgur.com/xftZfBi.png" alt="login"/>
      </Link>
      <Link to="/sign-up">
        <p>SignUp</p>
      </Link>
      <button
        className="demobttn"
        onClick={demoClick}
      >
        DEMO
      </button>
      <a href="https://www.linkedin.com/in/henry-walton-324977187/" target="_blank">
        <img src="https://i.imgur.com/yHgUB15.png" alt="login"/>
      </a>
      <a href="https://github.com/hnrywltn" target="_blank">
        <img src="https://i.imgur.com/35z8Aim.png" alt="login"/>
      </a>
    </div>
  );
}
export default Splash;
