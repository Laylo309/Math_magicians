/* eslint-disable linebreak-style */
import React from 'react';
import './css/calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      this.props,
      <div className="calculator-grid">
        <div className="output">
          <div className="data-previous-operand" id="previous-operand"></div>
          <div className="data-current-operand" id="current-operand">0</div>
        </div>
        <button className="data-all-clear">AC
        </button>
        <button className="data-number">+/-</button>
        <button className="data-number">%</button>
        <button className="data-operation">÷</button>
        <button className="data-number">1</button>
        <button className="data-number">2</button>
        <button className="data-number">3</button>
        <button className="data-operation">*</button>
        <button className="data-number">4</button>
        <button className="data-number">5</button>
        <button className="data-number">6</button>
        <button className="data-operation">+</button>
        <button className="data-number">7</button>
        <button className="data-number">8</button>
        <button className="data-number">9</button>
        <button className="data-operation">-</button>
        <button className="data-number" id="span-two">0</button>
        <button className="data-number">.</button>
        <button className="data-operation" >=</button>
      </div>
    );
  }
}

export default Calculator;
