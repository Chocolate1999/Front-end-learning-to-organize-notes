const defalutState = {
  inputValue: 'Chocolate',
  list: []
}

export default (state = defalutState, action) => {
  if (action.type === 'change_input') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  return state
}