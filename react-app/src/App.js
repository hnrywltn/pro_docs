import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
// import User from './components/User';
import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import { authenticate } from './store/session';
import { ModalProvider } from './components/context/modal.js';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <ModalProvider>
    <BrowserRouter>

      <Switch>
        <Route path='/login' exact={true}>
          <NavBar />
          <LoginForm />
        </Route>
        <Route path='/splash' exact={true}>
          <Splash />
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/projects' exact={true} >
          <NavBar />
          <Projects/>
        </ProtectedRoute>
{/* <ProtectedRoute path='/users/:userId' exact={true} >
  <NavBar />
  <User />
</ProtectedRoute> */}
        <ProtectedRoute path='/' exact={true} >
          <NavBar />
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
