import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './Utils/PrivateRoute.js';
import Login from './registrations/Login.js';
import Register from './registrations/Register.js';
import Home from './components/Home.js';
import './App.css'

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <PrivateRoute exact path='/home'>
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  )
}

export default App
