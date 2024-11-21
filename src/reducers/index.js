import { combineReducers } from 'redux'
import counterReducer from './counter'
import isLogInReducer from './isLogin'

// 複数のreducerをまとめる
const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLogInReducer,
})

export default allReducers
