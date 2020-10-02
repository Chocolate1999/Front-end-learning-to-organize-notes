import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'


export const changeInputAction = (value) =>({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const delItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})