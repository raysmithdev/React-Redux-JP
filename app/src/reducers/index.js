import { combineReducers } from 'redux'
import blogs from './blogs'
import user from './user'

const rootReducer = combineReducers({
  blogs,
  user
})

export default rootReducer
