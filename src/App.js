import './App.css';
import Calculator from './components/Calculator.js';

function App() {
  const newCalculator = new Calculator();
  return (
    newCalculator.render()
  );
}

export default App;
