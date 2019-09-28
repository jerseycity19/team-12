import React, { Component } from 'react'
import {Card, CardDeck, Container, Row, Col} from 'react-bootstrap'
import './Forum.scss';


class Forum extends Component {
  render(){
    return (
      <div>
        <div className = "forum-header">
        
        <h1>Forum for Open Discussions</h1>
        <p>The is a safe space for our account members and visitors to engage in open discussion. 
        Please feel free to make a post sharing an experience, question, or thought with our community.</p>
        </div>
        <div className = "RowDiv">
         
          
            <div className = "ColDiv">
              <Card>
              <a href = "/article1"><img src={require("./download.jpeg")} className = "fightIt"/></a>
                <Card.Body>
                  <Card.Title>Article 1</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </div>
            <div className = "ColDiv">
            <Card>
            <a href = "/article1"><img src={require("./download.jpeg")} className = "fightIt"/></a>
              <Card.Body>
                <Card.Title>Article 2</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </div>
            <div className = "ColDiv">
            <Card>
            <a href = "/article1"><img src={require("./download.jpeg")} className = "fightIt"/></a>
              <Card.Body>
                <Card.Title>Article 3</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </div>
            </div>
            </div>
    )
  }
}

export default Forum;