import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, delItemAction } from './store/actionCreaters'
import TodoListUI from './TodoListUI';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange); //订阅Redux的状态
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  storeChange() {
    this.setState(store.getState())
  }

  // 监听input输入事件
  changeInputValue(e) {
    // 创建Action,action就是一个对象
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = changeInputAction(e.target.value);
    store.dispatch(action)
  }

  // 监听增加按钮绑定事件
  clickBtn() {
    // const action = { type: ADD_ITEM }
    const action = addItemAction();
    store.dispatch(action)
  }
  // 列表选项删除事件
  deleteItem(index) {
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = delItemAction(index);
    store.dispatch(action)
  }
}

export default TodoList;