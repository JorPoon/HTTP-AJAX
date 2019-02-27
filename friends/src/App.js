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
      error: '',
      friend: '',
      age: 0,
      email: ''
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

  handleChanges = e => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
          <FriendsList friendsList={this.state.friendsList} />
          <NewFriends
          handleChanges={this.handleChanges}
          friend={this.state.friend}
          age={this.state.age}
          email={this.state.email}
          />
      </div>
    );
  }
}

export default App;
