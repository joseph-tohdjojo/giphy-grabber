import React from 'react'
import {connect} from 'react-redux'
import Masonry from 'react-masonry-component'
import PropTypes from 'prop-types'

import styles from './GiphyGrid.scss'
import { fetchGiphysIfNeeded } from '../redux/action.creators'

// components
import Giphy from '../Giphy/Giphy'
import Loading from '../Loading/Loading'
import NoGiphys from '../NoGiphys/NoGiphys'

class GiphyGrid extends React.Component {
  componentWillMount() {
    this.props.getTrendingGiphys()
  }

  render() {
    const {giphys, giphyStatus} = this.props
    if(giphys.length === 0 && !giphyStatus.isFetching) return <NoGiphys />

    const giphyEls = giphys && giphys.length > 0
      ? giphys.map((giphy, i) => <Giphy key={giphy.id} giphy={giphy} />)
      : []

    const masonryOptions = {
      horizontalOrder: true,
      itemSelector: '.masonry-grid-item',
      transitionDuration: 600,
    }

    return (
      giphyStatus.isFetching
      ? <Loading />
      : <Masonry
          className={`masonry-grid ${styles.wrapper}`}
          elementType={'ul'}
          onImagesLoaded={loaded => ''}
          onLayoutComplete={items => ''}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={true}
        >
          { giphyEls }
        </Masonry>
    )
  }
}

const mapStateToProps = ({giphys, search}, ownProps) => ({
  giphyStatus: giphys[search.currentSearch.toLowerCase()] || {},
  giphys: giphys[search.currentSearch.toLowerCase()] ? giphys[search.currentSearch.toLowerCase()].items.data || [] : [],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTrendingGiphys() {
    dispatch(fetchGiphysIfNeeded('trending', true))
  },
})

GiphyGrid.propTypes = {
  getTrendingGiphys: PropTypes.func.isRequired,
  giphys: PropTypes.arrayOf(PropTypes.object),
  giphyStatus: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyGrid)
