import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import EightBall from "./components/EightBall";


function App() {
  return (
    <div className="App">
      <Router>
        <EightBall />
      </Router>
     
    </div>
  );
}

export default App;
