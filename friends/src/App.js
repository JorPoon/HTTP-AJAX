import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './Friends/FriendsList'
import NewFriends from './Friends/NewFriends'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state= {
      friendsList: [],
      error: ''
    }
  }

  componentDidMount(){
    console.log(`CDM`)
    axios
    .get(' http://localhost:5000/friends')
    .then(res => {
      console.log(res)
      this.setState({friendsList: res.data});
    })
    .catch(err => {
      console.log(err)
      this.setState({error: err});
    })
  }

  render() {
    return (
      <div className="App">
          <FriendsList friendsList={this.state.friendsList} />
          <NewFriends/>
      </div>
    );
  }
}

export default App;
