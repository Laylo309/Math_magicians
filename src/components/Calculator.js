/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/calculator.css';
import calculate from '../logic/calculate.js';

const Calculator = () => {
  const [calculator, addState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total, next, operation } = calculator;

  const handleEvent = (e) => {
    e.preventDefault();
    addState((prev) => calculate(prev, e.target.name));
  };

  const totalAmount = () => {
    if (total === 0 && next === null) {
      return 0;
    }
    if (total !== 0 && total !== null) {
      return total;
    }
    return '';
  };
  return (
    <Router>
      <Route path='/'>
        <React.Fragment>
    <div className="calculator-grid">
      <div className="output">
        <input
          type="text"
          className="data-current-operand"
          id="current-operand"
          value={totalAmount() + (operation || '') + (next || '')}
          disabled
        />
      </div>
      <button className="data-all-clear" onClick={handleEvent} name="AC">
        AC
      </button>
      <button className="data-number" onClick={handleEvent} name="+/-">
        +/-
      </button>
      <button className="data-number" onClick={handleEvent} name="%">
        %
      </button>
      <button className="data-operation" onClick={handleEvent} name="÷">
        ÷
      </button>
      <button className="data-number" onClick={handleEvent} name="1">
        1
      </button>
      <button className="data-number" onClick={handleEvent} name="2">
        2
      </button>
      <button className="data-number" onClick={handleEvent} name="3">
        3
      </button>
      <button className="data-operation" onClick={handleEvent} name="*">
        *
      </button>
      <button className="data-number" onClick={handleEvent} name="4">
        4
      </button>
      <button className="data-number" onClick={handleEvent} name="5">
        5
      </button>
      <button className="data-number" onClick={handleEvent} name="6">
        6
      </button>
      <button className="data-operation" onClick={handleEvent} name="+">
        +
      </button>
      <button className="data-number" onClick={handleEvent} name="7">
        7
      </button>
      <button className="data-number" onClick={handleEvent} name="8">
        8
      </button>
      <button className="data-number" onClick={handleEvent} name="9">
        9
      </button>
      <button className="data-operation" onClick={handleEvent} name="-">
        -
      </button>
      <button
        className="data-number"
        onClick={handleEvent}
        name="0"
        id="span-two"
      >
        0
      </button>
      <button className="data-number" onClick={handleEvent} name=".">
        .
      </button>
      <button className="data-operation" onClick={handleEvent} name="=">
        =
      </button>
    </div>
    </React.Fragment>
    </Route>
    </Router>
  );
};

export default Calculator;
