import {
  RECEIVE_GIPHYS,
  REQUEST_GIPHYS,
  SUBMIT_SEARCH,
} from './action.types'

export const search = (state = { currentSearch: '', searchHistory: [] }, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      let searchHistory = state.searchHistory.indexOf(action.search) > -1 ? state.searchHistory : [ action.search, ...state.searchHistory ]
      return {
        ...state,
        currentSearch: action.search,
        searchHistory,
      }
    default:
      return state
  }
}

const giphys = (
  state = {
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_GIPHYS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_GIPHYS:
      return {
        ...state,
        isFetching: false,
        items: action.giphys,
        lastUpdated: action.receivedAt,
      }
    default:
      return state
  }
}

export const giphysBySearch = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GIPHYS:
    case REQUEST_GIPHYS:
      return {
        ...state,
        [action.search]: giphys(state[action.search], action),
      }
    default:
      return state
  }
}
