import React from 'react'


const Friend = ({friends, match, deleteFriend, setUpdateForm}) => {
  const {id} = match.params

  const friend = friends.find(thing => `${thing.id}` === id)

  if(!friend) {
      return <h1>Loading Friends</h1>
  }

      return (
        <div key={friend.id}>
        <h1>{friend.name}</h1>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <button onClick={e => deleteFriend(e, friend.id)}> Delete Friend </button>
        <button onClick={e => setUpdateForm(e, friend)}>Update Friend</button>
      </div>
      )

}

export default Friend;