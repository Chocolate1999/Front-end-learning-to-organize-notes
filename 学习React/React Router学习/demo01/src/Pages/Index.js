import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
  }
  render() {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <Link to={'/list/' + item.uid}> {item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Index;