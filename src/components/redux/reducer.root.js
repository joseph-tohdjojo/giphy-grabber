// vendor dependencies
import { combineReducers } from 'redux'

// reducers
import {giphysBySearch as giphys, search} from './reducer.search'

const rootReducer = combineReducers({
  giphys,
  search,
})

export default rootReducer
