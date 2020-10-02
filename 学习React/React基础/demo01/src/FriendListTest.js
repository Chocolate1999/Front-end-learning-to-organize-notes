import React, { Component, Fragment } from 'react';
import './style.css'
import FriendListItem from './FriendListItem';
class FriendListTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 'Chocolate',
      list: ['mick', 'jack']
    }
    this.deleteItem = this.deleteItem.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="ipt">增加服务</label>
          <input 
            id="ipt" 
            className="input" 
            value={this.state.inputVal} 
            onChange={this.inputChange.bind(this)}
            ref={(input)=>{this.input = input}}
          />
          <button onClick={this.addFriendsList.bind(this)}>增加小朋友</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <FriendListItem
                  key={index + item}
                  idx={index}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  // 监听输入框
  inputChange(e) {
    this.setState({
      // inputVal: e.target.value,
      inputVal: this.input.value
    })
  }
  // 增加列表项
  addFriendsList(e) {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }
  // 删除列表项
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default FriendListTest;