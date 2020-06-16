import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './navigation/Navigation.js';
import PrivateRoute from './Utils/PrivateRoute.js';
import Login from './login/Login.js';
import Register from './register/Register.js';
import Home from './components/Home.js';
import Contact from './contact/Contact.js';

import styles from './App.module.scss';

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <div className={styles.home}>
            <Route exact path='/'>
              <Navigation />
              <Login />
            </Route>

            <Route exact path='/register'>
              <Navigation />
              <Register />
            </Route>

            <Route exact path='/contact'>
              <Navigation />
              <Contact />
            </Route>

            <PrivateRoute exact path='/home'>
              <Navigation />
              <Home />
            </PrivateRoute>
          </div>
        </Switch>
      </Router>
    </>
  )
}

export default App
