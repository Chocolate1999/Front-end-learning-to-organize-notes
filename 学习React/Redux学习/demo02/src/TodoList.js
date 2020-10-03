import React from 'react';
import { connect } from 'react-redux';  //引入连接器

const TodoList =(props)=>{
  let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
  return (
      <div>
          <div>
              <input value={inputValue} onChange={inputChange} />
              <button onClick={clickButton}>提交</button>
          </div>
          <ul>
              {
                  list.map((item,index)=>{
                      return (<li key={index}>{item}</li>)
                  })
              }
          </ul>
      </div>
  );
}

// class TodoList extends Component {
//   render() {
//     let { inputValue, inputChange, clickButton, list } = this.props;
//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={inputChange} />
//           <button onClick={clickButton}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return (<li key={index}>{item}</li>)
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// 映射关系就是把原来的state映射成组件中的props属性
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
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
    },
    clickButton() {
      let action = { type: 'add_item' }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);