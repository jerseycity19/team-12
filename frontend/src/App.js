import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import MyNavbar from "./Components/Navbar/Navbar";
import Forum from "./Components/Forum/Forum";
import Login from "./Components/Login/Login";
import Trackpage from './Components/Trackpage/Trackpage'

import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Router>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Forum" component={Forum} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/track" component={Trackpage} />

        </Router>
          
    </div>
  );
}

export default App;
