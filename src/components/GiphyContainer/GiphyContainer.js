import React from 'react'
import { connect } from 'react-redux'

import styles from './GiphyContainer.scss'

// components
import GiphyGrid from '../GiphyGrid/GiphyGrid'

const GiphyContainer = ({currentSearch}) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <h1><b>Showing results for:</b> {currentSearch}</h1>
    </div>
    <GiphyGrid />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  currentSearch: state.search.currentSearch,
})

export default connect(mapStateToProps)(GiphyContainer)
