import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
          <Route exact path="/" component={Homepage} />
        </Router>
          
    </div>
  );
}

export default App;
