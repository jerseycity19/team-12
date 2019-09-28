import React, { Component } from 'react'
import './Homepage.css'
class Homepage extends Component {
  render(){
    return (
      <div className = "top-header">
        {/* <img className="background-image"
                    src={require("./doctor.png")}
                    alt="background"></img> */}
        <h1>Stronger than Addiction</h1>
        <p>Shatterproof is a national nonprofit organization dedicated to ending the devastation addiction causes families</p>
        </div>
    )
  }
}

export default Homepage;