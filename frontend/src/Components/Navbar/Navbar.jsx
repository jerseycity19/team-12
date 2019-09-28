import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser as faUserEmpty } from "@fortawesome/free-regular-svg-icons";
// import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {


  render() {
    return (
        <div className="w3-bar w3-white w3-card" id="myNavbar">
            <div className="w3-bar-item w3-button w3-wide">
                <a href="/">
                  <img
                    className="logo"
                    src={require("./logo.svg")}
                    alt="logo"
                  />
                </a>
              
          </div>
          <div class="w3-right w3-hide-small">
                  <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
                  <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
                  <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>
                  <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PRICING</a>
                  <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
                </div>
        </div>
        
    );
  }
}

export default Navbar;