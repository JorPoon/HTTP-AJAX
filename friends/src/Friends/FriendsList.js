import React from 'react'
import {Link} from 'react-router-dom'

const FriendsList = (props) => {
  return (
    props.friendsList.map(friend => {
        return (

        <div>
        <Link to={`/${friend.id}`} key={friend.id}>Info</Link> 
                 <h1>{friend.name}</h1>
                 <p>Age: {friend.age}</p>
                 <p>Email: {friend.email}</p>
        </div> 
     )})
  );
}

export default FriendsList;