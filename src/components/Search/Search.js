import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchGiphysIfNeeded } from '../redux/action.creators'
import styles from './Search.scss'

class Search extends Component {
  static propTypes = {
    searchHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
    submitSearch: PropTypes.func.isRequired,
  }

  state = { inputVal: '' }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.inputVal.length === 0) return

    this.props.submitSearch(this.state.inputVal)
    this.setState({ inputVal: '' })
  }

  handlePrevSearchClick = search => e => {
    e.preventDefault()

    this.props.submitSearch(search)
    this.setState({ inputVal: '' })
  }

  render() {
    const searchHistory = this.props.searchHistory.map((search, i) => (
      <li key={i}>
        <a href="#" onClick={this.handlePrevSearchClick(search)}>
          {search}
        </a>
      </li>
    ))
    return (
      <form onSubmit={this.handleSubmit} className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          onChange={e => this.setState({ inputVal: e.target.value })}
          placeholder="Search..."
          value={this.state.inputVal}
        />
        <button className={styles.submit} type="submit">
          <img
            src="https://giphy.com/static/img/animations/search_animation_active.gif"
            alt="Submit search"
          />
        </button>

        <p
          className={`${styles.prevSearchesLabel} ${
            searchHistory.length > 0 ? '' : styles.hide
          }`}
        >
          Previous searches:
        </p>
        <div className={styles.prevSearches}>
          <ul>{searchHistory}</ul>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  searchHistory: state.search.searchHistory,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitSearch(search) {
    const trimmedSearch = search.trim()
    dispatch(fetchGiphysIfNeeded(trimmedSearch))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
