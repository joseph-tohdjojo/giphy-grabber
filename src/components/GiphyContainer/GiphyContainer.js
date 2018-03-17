import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './GiphyContainer.scss'

// components
import GiphyGrid from '../GiphyGrid/GiphyGrid'

const GiphyContainer = ({ currentSearch, ...props }) => (
  <div className={styles.wrapper}>
    <div className={styles.title}>
      <h1>
        <b>Showing results for:</b> {currentSearch}
      </h1>
    </div>
    <GiphyGrid />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  currentSearch: state.search.currentSearch,
})

GiphyContainer.propTypes = {
  currentSearch: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(GiphyContainer)
