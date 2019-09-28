import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Navbar from "./Components/Navbar/Navbar";
import Forum from "./Components/Forum/Forum";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Forum" component={Forum} />
        </Router>
          
    </div>
  );
}

export default App;
