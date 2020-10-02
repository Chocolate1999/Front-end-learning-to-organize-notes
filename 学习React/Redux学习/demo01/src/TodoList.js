import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
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
            renderItem={item => (<List.Item>{item}</List.Item>)}
          ></List>
        </div>
      </div>
    );
  }
  // 监听input输入事件
  changeInputValue(e) {
    // 创建Action,action就是一个对象
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  // 监听增加按钮绑定事件
  clickBtn() {
    const action = { type: 'addItem' }
    store.dispatch(action)
  }
}

export default TodoList;