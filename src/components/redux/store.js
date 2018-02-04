// vendor dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

// other dependencies
import rootReducer from './reducer.root'
import { submitSearch, fetchGiphys } from './action.creators'

const args = []
const middleWare = applyMiddleware(thunkMiddleware)

if(process.env.NODE_ENV === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  args.push(composeEnhancers(middleWare))
} else {
  args.push(middleWare)
}

const store = createStore(
  rootReducer,
  ...args
)

export default store
