import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Navbar from "./Components/Navbar/Navbar";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Route exact path="/" component={Homepage} />
        </Router>
          
    </div>
  );
}

export default App;
