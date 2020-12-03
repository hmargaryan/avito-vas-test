import { combineReducers } from 'redux'
import { textReducer } from './text/reducer'
import { imageReducer } from './image/reducer'
import { linkReducer } from './link/reducer'
import { colorReducer } from './color/reducer'

export default combineReducers({
  image: imageReducer,
  text: textReducer,
  link: linkReducer,
  color: colorReducer
})