/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
