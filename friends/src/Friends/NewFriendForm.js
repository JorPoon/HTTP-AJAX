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
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10)
    }
    // e.preventDefault();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
        }
    }));
    // this.setState({
    //   friend: {
    //   ...this.state.friend,
    //   [e.target.name]: e.target.value
    //   }
    // })
  }

  handleSubmit = e => {
    this.props.addFriend(e, this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    })
    console.log(this.state.friend)
  }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
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
        <button>Add Friend</button>
      </form>
    )
  } 
}


export default NewFriendForm;