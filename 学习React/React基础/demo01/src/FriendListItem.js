import React, { Component } from 'react';
// 引入属性校验
import PropTypes from 'prop-types'

class FriendListItem extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this)
  }
  render() { 
    return (  
    <li onClick={this.handleClick}>
      {this.props.idx}-{this.props.content}
    </li>
    );
  }
  // 子组件监听
  handleClick(){
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
}
FriendListItem.propTypes={
  idx: PropTypes.number.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

export default FriendListItem;