import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItemAction, delItemAction } from './store/actionCreaters'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    store.subscribe(this.storeChange); //订阅Redux的状态
  }
  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button
            type="primary"
            onClick={this.clickBtn}
          >增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
          ></List>
        </div>
      </div>
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