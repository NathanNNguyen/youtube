import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './components/Utils/PrivateRoute.js';
import Registration from './components/registrations/Registration.js'
import Home from './components/Home.js';

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Registration />
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
