import React, { Component } from 'react'
import './Homepage.scss'
class Homepage extends Component {
  render(){
    return (
      <div>
        <div className = "home-top-header">
          <h1>Stronger than Addiction</h1>
          <p>Shatterproof is a national nonprofit organization dedicated to ending the devastation addiction causes families</p>
          <p><a href="#about" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Need help? Click here</a></p>
        </div>
        <div class="w3-container" id="about">
        <h3 class="w3-center">ABOUT THE ORGANIZATION</h3>
        <p class="w3-center w3-large">Key features of our organization</p>
        <div class="w3-row-padding w3-center" >
          <div class="w3-quarter">
            <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
            <p class="w3-large">Get informed</p>
            <p>We've got tools and resources to help you understand the disease of addiction. </p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">End the Stigma</p>
            <p>More people than you might expect are impacted by addiction. Click <a href="/track">here</a> to see the stats.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Donate</p>
            <p>Click <a href="https://connect.clickandpledge.com/w/Form/4e21c330-0011-430e-a2c0-5400c4ba45d5">here</a> to donate. 100% of donations goes to support programs to help end addiction.</p>
          </div>
          <div class="w3-quarter">
            <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
            <p class="w3-large">Need Help?</p>
            <p>Click <i>here</i> to learn more about treatment options near you.</p>
          </div>
          </div>
        </div>
        <div className = "gray-header">
          <div className ="text-box">
            <h1>Forum for Open Discussion</h1>
            <p>This is a safe space for our account members to and vistors to engage in open discussion. Please feel free to make a post sharing an experience, question or thought with our community</p>
            <p><a href="/Forum" class="w3-button w3-black"><i class="fa fa-th"> </i> View Our Works</a></p>
          </div>
          <img className="forum-image" src={require("./sample-forum.png")} alt="forum"/>
        </div>
        <div className="event-header">
          <h2>Upcoming Events</h2>
          <div  className="event-grid">
            <div class="w3-card">
              <img src={require("./event.png")} alt="John" className = "event-image"/>
              <div class="w3-container">
                <h3>Celebrate Recovery</h3>
                <p class="w3-opacity">New York, New York</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> RSVP</button></p>
              </div>
            </div>
            <div class="w3-card">
              <img src={require("./event.png")} alt="John" className = "event-image"/>
              <div class="w3-container">
                <h3>Comissoner Talk</h3>
                <p class="w3-opacity">Delaware</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> RSVP</button></p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-stories">
          <h2>User Stories</h2>
          <div  className="event-grid">
            <div class="w3-card">
              <img src={require("./candle.jpeg")} alt="John" className = "candle-image"/>
              <div class="w3-container">
                <h3>John Doe</h3>
                <p class="w3-opacity">1989-2018</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Read more</button></p>
              </div>
            </div>
            <div class="w3-card">
              <img img src={require("./candle.jpeg")} alt="John" className = "candle-image"/>
              <div class="w3-container">
                <h3>Jane Doe</h3>
                <p class="w3-opacity">1989-2018</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Read more</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Homepage;