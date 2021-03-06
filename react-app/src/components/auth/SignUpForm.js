import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [github_handle, setGithub_handle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(github_handle, email, password, bio, linkedin));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords do not match'])
    }
  };

  const updateGithub_handle = (e) => {
    setGithub_handle(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateLinkedin = (e) => {
    setLinkedin(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="authForm" onSubmit={onSignUp}>
      {/* <h1>Sign Up</h1> */}
      <div className="errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        {/* <label>Github Handle</label> */}
        <input
          type='text'
          name='github_handle'
          maxLength='50'
          required
          placeholder='Github Handle'
          onChange={updateGithub_handle}
          value={github_handle}
        ></input>
      </div>
      <div>
        {/* <label>Email</label> */}
        <input
          type='text'
          name='email'
          placeholder='Email'
          maxLength='50'
          required
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        {/* <label>linkedin</label> */}
        <input
          placeholder="https://www.linkedin.com/..."
          pattern="https://www.linkedin.com/.*"
          maxLength='100'
          className="linkedinInputauth"
          type='url'
          name='linkedin'
          onChange={updateLinkedin}
          value={linkedin}
        ></input>
      </div>
      <div>
        {/* <label>Bio</label> */}
        <input
          type='text'
          name='bio'
          maxLength='400'
          placeholder='Bio'
          required
          onChange={updateBio}
          value={bio}
        ></input>
      </div>
      <div>
        {/* <label>Password</label> */}
        <input
          type='password'
          maxLength='50'
          placeholder='Password'
          name='password'
          required
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        {/* <label>Repeat Password</label> */}
        <input
          type='password'
          name='repeat_password'
          placeholder='Repeat Password'
          maxLength='50'
          required
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
