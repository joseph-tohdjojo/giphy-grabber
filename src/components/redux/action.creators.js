import axios from 'axios'

import {
  RECEIVE_GIPHYS,
  REQUEST_GIPHYS,
  SUBMIT_SEARCH,
} from './action.types'

export const submitSearch = search => {
  const trimmedSearch = search.trim()
  return {
    type: SUBMIT_SEARCH,
    search: trimmedSearch,
  }
}

const requestGiphys = search => {
  return {
    type: REQUEST_GIPHYS,
    search,
  }
}

const receiveGiphys = (search, json) => {
  return {
    type: RECEIVE_GIPHYS,
    search,
    giphys: json,
    receivedAt: Date.now(),
  }
}

export const invalidateSearch = search => {
  return {
    type: INVALIDATE_GIPHYS,
    search,
  }
}

export const fetchGiphys = search => {
  return function(dispatch) {
    dispatch(requestGiphys(search))

    return axios({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=50`
    })
      .then(response => response.data, err => console.log('An error occured.', err))
      .then(json => dispatch(receiveGiphys(search, json)))
  }
}

export const fetchTrendingGiphys = () => {
  return function(dispatch) {
    dispatch(requestGiphys('trending'))

    return axios({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=50`
    })
      .then(response => response.data, err => console.log('An error occured.', err))
      .then(json => dispatch(receiveGiphys('trending', json)))
  }
}

function shouldFetchGiphys(state, search) {
  const giphys = state.giphys[search]
  if (!giphys) {
    return true
  } else if (giphys.isFetching) {
    return false
  } else {
    return giphys.didInvalidate
  }
}

export function fetchGiphysIfNeeded(search, isTrending) {
  const trimmedSearch = search.trim().toLowerCase()
  return (dispatch, getState) => {
    dispatch(submitSearch(search.trim()))
    if (shouldFetchGiphys(getState(), trimmedSearch)) {
      return !isTrending ? dispatch(fetchGiphys(trimmedSearch)) : dispatch(fetchTrendingGiphys())
    } else {
      return Promise.resolve()
    }
  }
}
