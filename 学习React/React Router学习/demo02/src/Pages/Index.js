import React, { Component } from 'react';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { uid: 123, title: '超逸の技术博客' },
        { uid: 456, title: '一百个Chocolate' },
        { uid: 789, title: '学如逆水行舟，不进则退' },
      ]
    }
    /* 编程式重定向 */
    this.props.history.push("/home/");
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Index;