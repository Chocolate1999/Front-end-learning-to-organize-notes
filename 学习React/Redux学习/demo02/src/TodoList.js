import React, { Component } from 'react';
import { connect } from 'react-redux';  //引入连接器

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input 
            value={this.props.inputValue} 
            onChange={this.props.inputChange} 
          />
          <button>提交</button>
        </div>
        <ul>
          <li>Chocolate</li>
        </ul>
      </div>
    );
  }
}

// 映射关系就是把原来的state映射成组件中的props属性
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      //console.log(e.target.value)
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);