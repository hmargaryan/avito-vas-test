import {
  ADD_COLOR,
  CHANGE_COLOR,
  REMOVE_COLOR
} from './type'
import { nanoid } from 'nanoid'

const initialId = nanoid()
const initialColorState = {
  [initialId]: {
    id: initialId,
    color: '#ff6600',
    end: null
  }
}

export const colorReducer = (state = initialColorState, action) => {
  switch (action.type) {
    case ADD_COLOR:
      const id = nanoid()
      return {
        ...state, [id]: {
          id,
          color: '#ff6600',
          end: 100
        }
      }
    case CHANGE_COLOR:
      return { ...state, [action.payload.id]: action.payload }
    case REMOVE_COLOR:
      const { [action.payload]: deletedColor, ...newColors } = state
      return newColors
    default:
      return state
  }
}