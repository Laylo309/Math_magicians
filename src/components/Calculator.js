/* eslint-disable linebreak-style */
import React from 'react';
import './css/calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (e) => {
    e.preventDefault();
    this.setState((prev) => calculate(prev, e.target.name));
  };

  render() {
    const { total, next, operation } = this.state;
    const showTotal = () => {
      if (total === 0 && next === null) {
        return 0;
      }
      if (total !== 0 && total !== null) {
        return total;
      }
      return '';
    };
    return (
      <div className="calculator-grid">
        <div className="output">
          <input
            type="text"
            className="data-current-operand"
            id="current-operand"
            value={showTotal() + (operation || '') + (next || '')}
            disabled
          />
        </div>
        <button className="data-all-clear" onClick={this.handleEvent} name="AC">
          AC
        </button>
        <button className="data-number" onClick={this.handleEvent} name="+/-">
          +/-
        </button>
        <button className="data-number" onClick={this.handleEvent} name="%">
          %
        </button>
        <button className="data-operation" onClick={this.handleEvent} name="÷">
          ÷
        </button>
        <button className="data-number" onClick={this.handleEvent} name="1">
          1
        </button>
        <button className="data-number" onClick={this.handleEvent} name="2">
          2
        </button>
        <button className="data-number" onClick={this.handleEvent} name="3">
          3
        </button>
        <button className="data-operation" onClick={this.handleEvent} name="*">
          *
        </button>
        <button className="data-number" onClick={this.handleEvent} name="4">
          4
        </button>
        <button className="data-number" onClick={this.handleEvent} name="5">
          5
        </button>
        <button className="data-number" onClick={this.handleEvent} name="6">
          6
        </button>
        <button className="data-operation" onClick={this.handleEvent} name="+">
          +
        </button>
        <button className="data-number" onClick={this.handleEvent} name="7">
          7
        </button>
        <button className="data-number" onClick={this.handleEvent} name="8">
          8
        </button>
        <button className="data-number" onClick={this.handleEvent} name="9">
          9
        </button>
        <button className="data-operation" onClick={this.handleEvent} name="-">
          -
        </button>
        <button
          className="data-number"
          onClick={this.handleEvent}
          name="0"
          id="span-two"
        >
          0
        </button>
        <button className="data-number" onClick={this.handleEvent} name=".">
          .
        </button>
        <button className="data-operation" onClick={this.handleEvent} name="=">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
