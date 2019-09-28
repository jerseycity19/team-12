import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Navbar from "./Components/Navbar/Navbar";
<<<<<<< HEAD
import Forum from "./Components/Forum/Forum";
import Login from "./Components/Login/Login";
=======
import Trackpage from './Components/Trackpage/Trackpage'
>>>>>>> 01b164a578fd9d0d14f7caaf52da97655a4d6ba3

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Route exact path="/" component={Homepage} />
<<<<<<< HEAD
          <Route exact path="/Forum" component={Forum} />
          <Route exact path="/Login" component={Login} />
=======
          <Route exact path="/track" component={Trackpage} />

>>>>>>> 01b164a578fd9d0d14f7caaf52da97655a4d6ba3
        </Router>
          
    </div>
  );
}

export default App;
