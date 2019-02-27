import React from 'react'

const FriendsList = (props) => {
  return (
    props.friendsList.map(friend => {
        return <div key={friend.id}>
                 <h1>{friend.name}</h1>
                 <p>Age: {friend.age}</p>
                 <p>Email: {friend.email}</p>
               </div>
     })
  );
}

export default FriendsList;