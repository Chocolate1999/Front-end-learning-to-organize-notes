const defaultState = {
  inputValue: 'Write Something',
  list: [
    '写代码',
    '吃饭',
    '打游戏'
  ]
};
export default (state = defaultState, action) => {
  // reducer 里面只能接受state,不能改变state
  if (action.type === 'change_input_value') {
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    newState.inputValue = action.value
    return newState
  }

  //state值只能传递，不能使用
  if (action.type === 'addItem') { //根据type值，编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)  //push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }
  return state;
}