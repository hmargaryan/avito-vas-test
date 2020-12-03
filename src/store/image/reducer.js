import { CHANGE_TEXT } from '../text/type'
import { CHANGE_IMAGE } from './type'

export const imageReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_IMAGE:
      return action.payload
    default:
      return state
  }
}