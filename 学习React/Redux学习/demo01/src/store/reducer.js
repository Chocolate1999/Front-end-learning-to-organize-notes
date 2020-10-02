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
  return state;
}