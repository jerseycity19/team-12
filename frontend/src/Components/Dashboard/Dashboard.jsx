import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import './Dashboard.scss';

class Dashboard extends Component {
  render(){
    return (
      <div className = "outside">
      <img src={require('./picture.png')}></img>

      <img src={require('./bronze-league.png')} className = "bronze"></img>
      <div class="w3-card">
        <img src={require("./event.png")} alt="John" className = "event-image"/>
        <div class="w3-container">
          <h3>Comissoner Talk</h3>
          <p class="w3-opacity">New York City</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> RSVP</button></p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Volunteer</button></p>
        </div>
        </div>
        </div>
      )
    }
  }

export default Dashboard;
import './Dashboard.scss'

class Dashboard extends Component{
  render(){
    return(
      <div>
        hello
      </div>
    )
  }
}

export default Dashboard;
