import { CHANGE_TEXT } from './type'

export const textReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return action.payload
    default:
      return state
  }
}