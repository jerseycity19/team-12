import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Navbar from "./Components/Navbar/Navbar";
import Trackpage from "./Components/Trackpage/Trackpage";
import Login from "./Components/Login/Login";
import Survey from "./Components/Survey/Survey";
import Dashboard from "./Components/Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/track" component={Trackpage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Survey" component={Survey} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Router>
          
    </div>
  );
}

export default App;
