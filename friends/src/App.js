import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './Friends/FriendsList'
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
          {/* {this.state.friendsList.map(friend => {
             console.log(friend);
             return <div key={friend.id}>
                      <h1>{friend.name}</h1>
                      <p>Age: {friend.age}</p>
                      <p>Email: {friend.email}</p>
                    </div>
          })} */}
          <FriendsList friendsList={this.state.friendsList} />
          <form>
            <input type="text" placeholder='name' />
            <input type="text" placeholder='age'/>
            <input type="text" placeholder='email'/>
          </form>
      </div>
    );
  }
}

export default App;
