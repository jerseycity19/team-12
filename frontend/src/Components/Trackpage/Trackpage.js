import React, { Component } from 'react'
import './Trackpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Trackpage extends Component {
    render(){
    	return (

	<div className="body">
		<div className ="title">
			<p>TAKE ACTION</p>
			<h1>Raise Awareness Track</h1>
		</div>
		<div className = "summary">
			<div className="summary-inner">
				<p>Together we can reduce the stigma and secrecy associated with addiction. Earn achievements and xp and make a difference at the same time!</p>
			</div>
		</div>

		<div className="wrapper">
		  <div className="column-one">
		  	<h2>To dos</h2>
		  </div>
		  <div className="column-two">
		  	<h2>Achievements</h2>
	  	  </div>
		</div>


	</div>
    	)
    }
}

export default Trackpage;


