import React from 'react'

import styles from './Giphy.scss'

class Giphy extends React.Component {
  state = {
    src: this.props.giphy.images.fixed_width_still.url,
    hovering: false,
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.src !== nextProps.giphy.images.fixed_width_still.url) {
      this.setState({src: nextProps.giphy.images.fixed_width_still.url})
    }
  }

  render() {
    const {hovering} = this.state
    const {giphy} = this.props
    const backgroundColors = ['#0f9', '#93f', '#0cf', '#fff35c', '#f66']

    return (
      <li
        className={`masonry-grid-item ${styles.wrapper} ${hovering ? styles.hovering : ''}`}
        onMouseEnter={e => this.setState({src: giphy.images.fixed_width.url, hovering: true})}
        onMouseLeave={e => this.setState({src: giphy.images.fixed_width_still.url, hovering: false})}
        style={{
          backgroundColor: backgroundColors[Math.floor(Math.random() * (4+1))],
          height: giphy.images.fixed_width_still.height,
        }}
      >
        <a href={giphy.bitly_url}>
          <div className={styles.overlay}>
            <p>{giphy.title}</p>
          </div>
          <img
            src={this.state.src}
            style={{height: giphy.images.fixed_width_still.height}}
          />
        </a>
      </li>
    )
  }
}

export default Giphy
