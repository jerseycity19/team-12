import React, { Component } from 'react'
import './Homepage.scss'
class Homepage extends Component {
  render(){
    return (
      <div>
<div className = "top-header">
        {/* <img className="background-image"
                    src={require("./doctor.png")}
                    alt="background"></img> */}
          <h1>Stronger than Addiction</h1>
          <p>Shatterproof is a national nonprofit organization dedicated to ending the devastation addiction causes families</p>
          <p><a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
        </div>
        <div class="w3-container" id="about">
        <h3 class="w3-center">ABOUT THE COMPANY</h3>
        <p class="w3-center w3-large">Key features of our company</p>
        <div class="w3-row-padding w3-center" >
          <div class="w3-quarter">
            <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
            <p class="w3-large">Get informed</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">End the Stigma</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Advocate for Change</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Join the community</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          </div>
        </div>
        <div className = "gray-header">
          <div className ="text-box">
            <h1>Forum for Open Discussion</h1>
            <p>This is a safe space for our account members to and vistors to engage in open discussion. Please feel free to make a post sharing an experience, question or thought with our community</p>
          </div>
          
        </div>
      </div>
      
    )
  }
}

export default Homepage;