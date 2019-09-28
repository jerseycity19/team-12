import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Navbar from "./Components/Navbar/Navbar";
import Forum from "./Components/Forum/Forum";
import Login from "./Components/Login/Login";
import Trackpage from './Components/Trackpage/Trackpage'
import forumPost from './Components/forumPost/forumPost'
import Dashboard from './Components/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Forum" component={Forum} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/track" component={Trackpage} />
          <Route exact path="/forumPost" component={forumPost}/>
          <Route exact path="/Dashboard" component ={Dashboard}/>

        </Router>

    </div>
  );
}

export default App;
