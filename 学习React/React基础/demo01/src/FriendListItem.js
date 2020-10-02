import React, { Component } from 'react';
class FriendListItem extends Component {
  render() { 
    return (  
    <li>{this.props.content}</li>
    );
  }
}
 
export default FriendListItem;