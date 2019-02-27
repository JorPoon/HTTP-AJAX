import React from 'react'

const NewFriends = props => {
    return (
        <form>
        <input 
        type='text'
        placeholder='name' 
        name='friend'
        value={props.friend}
        onChange={props.handleChanges}
        />
        <input 
        type='number'
        placeholder='age'
        name='age'
        value={props.age}
        onChange={props.handleChanges}
        />
        <input 
        type='text'
        placeholder='email'
        name='email'
        value={props.email}
        onChange={props.handleChanges}
        />
      </form>
    )
}

export default NewFriends;