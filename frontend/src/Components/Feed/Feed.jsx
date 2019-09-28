import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Feed.scss';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
        this.handler = this.handler.bind(this);
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    handlerCloseSideBar = () => {
        this.setState({menuOpen: false});
    }

    handler = (e) => {
        e.preventDefault();
        this.setState({
            menuOpen: false
        });
    }

    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu
                className="menu"
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
            <h1>Social Media Feed</h1>
              <img src={require("./tweet.jpg")} className = "feed-image"/>
              <img src={require("./sample-tweet.jpg")} className = "feed-image"/>
              <img src={require("./sample-tweet-2.jpg")} className = "feed-image"/>
                <div id="social">
                    <a href="/" className="fa fa-fw fa-facebook"><span>facebook</span></a>
                    <a href="/" className="fa fa-fw fa-twitter"><span>twitter</span></a>
                    <a href="/" className="fa fa-fw fa-instagram"><span>instagram</span></a>
                    
                </div>
            </Menu>
        );
    }
}

export default Feed;
