import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import "./forumPost.scss";

class forumPost extends Component {
  render(){
    return (
      <div className ="outside">
      <div className ="title">
      <h1>You are never alone!!!</h1>
      <h2>By: John Doe</h2>
      </div>
<Card className = "titlePost">
  <Card.Body>Addiction is tough, not only for the individual going through it, but also for the family. I want people to know my story, so that I can break free of the stigma,
   and show the world that coming back from the brink is always possible and IS the standard. Sometimes you just need a bit more help than others.</Card.Body>
</Card>

<div className = "CommentG">
<Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>
    <div className = "comment1">
    <Comment>
          <Comment.Content>
        <div className ="nameT">
        <Comment.Author as='a'>Angela</Comment.Author>
        <Comment.Metadata>
          <div className = "time">Yesterday at 12:45AM</div>
        </Comment.Metadata>
        </div>
        <Comment.Text>
          <p>Live Stigma Free! You're a strong individual for reaching out<br></br> and talking to all of us :)</p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
    </div>
    <Comment>
          <Comment.Content>
        <div className ="nameT">
        <Comment.Author as='a'>Brandon</Comment.Author>
        <Comment.Metadata>
          <div className = "time">Yesterday at 12:30AM</div>
        </Comment.Metadata>
        </div>
        <Comment.Text>
          <p>Stay strong pal, everyday is a battle!</p>
        </Comment.Text>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Content>
      <div className = "nameV">
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div className = "time">5 days ago</div>
        </Comment.Metadata>
        </div>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
      </Comment.Content>
    </Comment>

    <div className = "comment1">
    <Comment>
          <Comment.Content>
        <div className ="nameT">
        <Comment.Author as='a'>Angela</Comment.Author>
        <Comment.Metadata>
          <div className = "time">Yesterday at 12:45AM</div>
        </Comment.Metadata>
        </div>
        <Comment.Text>
          <p>It's a tough road, but you're strong, and everyone <br></br> around you cares!</p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
    </div>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
</div>
  </div>


)
}
}

export default forumPost;
