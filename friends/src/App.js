import React, { Component } from 'react';
import {BrowserRouter as Router, Route, withRouter, NavLink} from 'react-router-dom';
import axios from 'axios';
import FriendsList from './Friends/FriendsList'
import NewFriendForm from './Friends/NewFriendForm'
import Friend from './Friends/Friend'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state= {
      friendsList: [],
      error: '',
      // friend: '',
      // age: 0,
      // email: ''
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

  // handleChanges = e => {
  //   // e.preventDefault();
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
    .post(' http://localhost:5000/friends', friend)
    .then(res => {
      console.log(res);
        this.setState({
          friendsList: res.data
        });
        this.props.history.push('/')
    })
    .catch(err => {
      console.log(err);
    })
  }

  deleteFriend =(e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      console.log(res);
      this.setState({
        friendsList: res.data
      });
      this.props.history.push('/')
    .catch(err => {
      console.log(err);
    })
    })
  } 

  // addNewFriend = e => {
  //   e.preventDefault();
  //   const newFriend = {
  //     friend: this.state.friend,
  //     age: this.state.age,
  //     email: this.state.email
  //   }
  //   this.setState({
  //     friendsList:[...this.state.friendsList, newFriend]
  //   })
  // }

  render() {
    return (
      <div className="App">
      <nav className="navBar">
        <NavLink to="/friend-form"> Add Friend</NavLink>
        <NavLink to="/">Friends' List</NavLink>
      </nav>

      <Route exact path="/" 
      render= { props => 
      <FriendsList 
      {...props} 
      friendsList={this.state.friendsList} />}
      />

      <Route  path="/:id"
      render={ props =>
      <Friend 
        {...props}
        deleteFriend={this.deleteFriend}
        friends={this.state.friendsList}
      />}
      />
         
          {/* <NewFriendForm
          handleChanges={this.handleChanges}
          friend={this.state.friend}
          age={this.state.age}
          email={this.state.email}
          /> */}
          <Route exact path="/friend-form" render={ props => 
          <NewFriendForm 
          {...props} 
          addFriend={this.addFriend}
          />}/>
          
      </div>
    );
  }
}

const AppWithRouter= withRouter(App);

export default AppWithRouter;
