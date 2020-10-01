import React, { Component, Fragment } from 'react';

class FriendListTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 'Chocolate',
      list: ['mick', 'jack']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputVal} onChange={this.inputChange.bind(this)}></input>
          <button onClick={this.addFriendsList.bind(this)}>增加小朋友</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index + item}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(e){
    this.setState({
      inputVal: e.target.value,

    })
  }
  addFriendsList(e){
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }
}

export default FriendListTest;