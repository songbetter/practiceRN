import { combineReducers } from 'redux'
import StatusCodeReducer from './StatusCodeReducer'
import SelectReducer from './SelectReducer'

const rootReducer = combineReducers({
  StatusCodeReducer,
  SelectReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
