// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';  // Import SignUpPage component

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* Route to the SignUp page */}
          <Route path="/signup" component={SignUpPage} />
          
          {/* Other routes can be added here */}
          {/* Example of a home page route */}
          {/* <Route path="/" component={HomePage} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
