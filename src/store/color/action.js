import {
  ADD_COLOR,
  CHANGE_COLOR,
  REMOVE_COLOR
} from './type'

export const addColor = () => ({
  type: ADD_COLOR
})

export const changeColor = (id, color, end) => ({
  type: CHANGE_COLOR,
  payload: { id, color, end }
})

export const removeColor = (id) => ({
  type: REMOVE_COLOR,
  payload: id
})