import { CHANGE_LINK } from './type'

export const linkReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_LINK:
      return action.payload
    default:
      return state
  }
}