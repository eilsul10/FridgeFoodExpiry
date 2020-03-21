import React from 'react';
import FoodInput from './components/FoodInput';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Food Tracker
      </header>

      <FoodInput></FoodInput>
      <List></List>
    </div>
  );
}

export default App;
