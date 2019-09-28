import React, { Component } from 'react'
import './Trackpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './Todos'


class Trackpage extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Talk about addiction at the dinner table',
        completed: false
      },
      {
        id: 2,
        title: 'Talk to a friend about it',
        completed: false
      },
      {
        id: 3,
        title: 'Refer a friend',
        completed: false
      }
    ]
  }      

//Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed //toggle
      }
      return todo;
    }) });
  }


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
       	    <Todos todos={this.state.todos} markComplete={this.markComplete}/>  
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


