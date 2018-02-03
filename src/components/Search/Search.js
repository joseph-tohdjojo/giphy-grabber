import React, { Component } from 'react'

import styles from './Search.scss'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputVal: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    alert(this.state.inputVal)
    this.setState({ inputVal: '' })
  }

  handleInputChange(e) {
    this.setState({ inputVal: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          onChange={this.handleInputChange}
          value={this.state.inputVal}
        />
        <button
          className={styles.submit}
          type="submit"
        >
          <img src="https://giphy.com/static/img/animations/search_animation_active.gif" />
        </button>
      </form>
    )
  }
}

export default Search
