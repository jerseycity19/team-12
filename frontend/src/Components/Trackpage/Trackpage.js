import React, { Component } from 'react'
import './Trackpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './Todos'

/*
Notes:
-Image not showing fix:
   When using Webpack you need to require images in order for Webpack to process them, which would explain why external images load while internal do not, so instead of <img src={"/images/resto.png"} /> you need to use <img src={require('/images/image-name.png')} /> replacing image-name.png with the correct image name for each of them. That way Webpack is able to process and replace the source img.
*/

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
      },
      {
        id: 4,
        title: 'Go to an addiction related event',
        completed: false
      },
      {
        id: 5,
        title: 'Share your story!',
        completed: false
      },
      {
        id: 6,
        title: 'Make a social media post on addiction #shatterproof',
        completed: false
      },
      {
        id: 7,
        title: 'Do some research!',
        completed: false
      },
      {
        id: 8,
        title: 'Talk to a friend about it',
        completed: false
      },
      {
        id: 9,
        title: 'Create a post!',
        completed: false
      },
      {
        id: 10,
        title: 'Participate at an event!',
        completed: false
      },
      {
        id: 11,
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
          <div className="space-on-top">
          </div>
          <div className ="title">
            <div className="title-inner">
            <p>TAKE ACTION</p>
            <h1>Raise Awareness Track</h1>
            </div>
          </div>
          <div className = "summary">
            <div className="summary-inner">
              <p>Together we can reduce the stigma and secrecy associated with addiction. Earn achievements and xp and make a difference at the same time!</p>
            </div>
          </div>

          <div className="wrapper">
            <div className="column-one">
              <h2>To dos</h2>
              <div className="bronze-league-title-wrapper">
                <h3 className="bronze-league-title">Bronze League</h3>
              </div>
                  <div className="todos-block-one">
                    <Todos todos={this.state.todos.slice(0,4)} markComplete={this.markComplete}/>  
                  </div>
              <div className="silver-league-title-wrapper">
                <h3 className="silver-league-title">Silver League</h3>
              </div>
                  <div className="todos-block-two">
                    <Todos todos={this.state.todos.slice(4,8)} markComplete={this.markComplete}/>  
                  </div>
              <div className="gold-league-title-wrapper">
                <h3 className="gold-league-title">Gold League</h3>
              </div>
                  <div className="todos-block-three">
                    <Todos todos={this.state.todos.slice(8,11)} markComplete={this.markComplete}/>  
                  </div>
            </div>
            <div className="column-two">
              <h2>Achievements</h2>
              <div className="xp-wrapper">
                <div className="xp">
                  <p>XP Gained: </p><p>0</p>
                </div>
              </div>
              <div className="bronze-league">
                <img src={require('./bronze-league.png')}/>
              </div>
              <div className="achievements-and-friends">
                <img src={require('./achievements-and-friends.png')}/>
              </div>
          </div>
          
          </div>


        </div>
    	)
    }
}

export default Trackpage;


