import React from 'react';
import './App.css';
import { Hello, HelloState } from './Hello';
import Board from './Board';

const App = () => (
  <div className="App">
    <Hello firstName="Bob" />
    <HelloState />
    <Board />
  </div>
);

export default App;
