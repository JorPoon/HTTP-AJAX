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
      activeFriend: null,
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
    axios
    .delete(`http://localhost:5000/friends/${id}`)
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

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend,
    })
    this.props.history.push('/friend-form');
  }

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then( res => {
      console.log(res);
      this.setState({
        activeFriend: null,
        friendsList: res.data,
      })
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err);
    });

  }



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
        setUpdateForm={this.setUpdateForm}
        
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
          updateFriend={this.updateFriend}
          activeFriend={this.state.activeFriend}
          />}/>
          
      </div>
    );
  }
}

const AppWithRouter= withRouter(App);

export default AppWithRouter;
