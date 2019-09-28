import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import './Dashboard.scss';

class Dashboard extends Component {
  render(){
    return (
      <div className = "outside">
      <h1>Events near you!</h1>
      <div class="Calendar">
        <h3>Celebrate Recovery</h3>
        <p class="w3-opacity">New York, New York</p>
        <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
        <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> RSVP</button></p>
      </div>
      </div>

      )
    }
  }

export default Dashboard;
