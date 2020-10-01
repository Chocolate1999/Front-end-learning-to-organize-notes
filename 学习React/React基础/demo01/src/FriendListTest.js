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
          <input ></input>
          <button>增加小朋友</button>
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
}

export default FriendListTest;