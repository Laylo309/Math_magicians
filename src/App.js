/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator.js';
import Home from './components/Home.js';
import Quote from './components/Quote.js';
import Nav from './components/Nav.js';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
