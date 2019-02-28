import React from 'react'


//change this into a class component
class NewFriendForm extends React.Component {
  state= {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  }

  handleChanges = e => {
    e.persist();
    // e.preventDefault();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
        }
    }));
    // this.setState({
    //   friend: {
    //   ...this.state.friend,
    //   [e.target.name]: e.target.value
    //   }
    // })
  }

render() {
    return (
        <form>
        <input 
        type='text'
        placeholder='name' 
        name='name'
        value={this.state.friend.name}
        onChange={this.handleChanges}
        />
        <input 
        type='number'
        placeholder='age'
        name='age'
        value={this.state.friend.age}
        onChange={this.handleChanges}
        />
        <input 
        type='text'
        placeholder='email'
        name='email'
        value={this.state.friend.email}
        onChange={this.handleChanges}
        />
      </form>
    )
  } 
}


export default NewFriendForm;