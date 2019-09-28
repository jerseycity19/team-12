import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Navbar from "./Components/Navbar/Navbar";
import Trackpage from './Components/Trackpage/Trackpage'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/track" component={Trackpage} />

        </Router>
          
    </div>
  );
}

export default App;
