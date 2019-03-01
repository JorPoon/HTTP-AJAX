import React from 'react'


//change this into a class component
class NewFriendForm extends React.Component {
  state= {
    friend: this.props.activeFriend || {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidUpdate(prevProps) {
    if(this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
      this.setState({
        friend: this.props.activeFriend,
      })
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
    if(this.props.activeFriend) {
      this.props.updateFriend(e, this.state.friend)
    } else {
      this.props.addFriend(e, this.state.friend);
    }
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
        <button>{`${this.props.activeFriend? 'Update': 'Add'} Friend`}</button>
      </form>
    )
  } 
}


export default NewFriendForm;