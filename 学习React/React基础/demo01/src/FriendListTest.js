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

  // componentWillMount(){
  //   console.log('componentWillMount-----组件将要挂到页面的时刻');
  // }

  // componentDidMount(){
  //   console.log('componentDidMount-----组件挂载完成的时刻');
  // }

  // shouldComponentUpdate(){
  //   console.log('1-shouldComponentUpdate');
  //   // 如果返回false，后面两步都不会执行了。
  //   return true;
  // }

  // componentWillUpdate(){
  //   console.log('2-componentWillUpdate');
  // }

  // componentDidUpdate(){
  //   console.log('4-componentDidUpdate');
  // }

  render() {
    // console.log('3-render-----组件挂载中');
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
        <ul ref={(ul)=>{this.ul = ul}}>
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
    },()=>{
      // 因为this.setState属于异步方法，不在回调函数里面执行的话
      // 长度会少一个，因为不会等待更新成功，console.log(xxx)属于同步方法
      // 因此setState又添加了一个回调函数，等待它执行完后，再执行我们的同步方法
      // 这个和Vue中$nextTick()类似
      console.log(this.ul.querySelectorAll('li').length);
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