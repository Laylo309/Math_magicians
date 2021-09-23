/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator.js';
import Home from './components/Home.js';
import Quote from './components/Quote.js';
import Nav from './components/Nav.js';

// eslint-disable-next-line arrow-body-style
function App() {
  return (
    <Router>
      <div>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
