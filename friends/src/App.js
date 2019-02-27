import React, { Component } from 'react';
import axios from 'axios';

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
          {this.state.friendsList.map(friend => {
             console.log(friend);
             return <div key={friend.id}>
                      <h1>{friend.name}</h1>
                      <p>{friend.age}</p>
                      <p>{friend.email}</p>
                    </div>
          })}
      </div>
    );
  }
}

export default App;
