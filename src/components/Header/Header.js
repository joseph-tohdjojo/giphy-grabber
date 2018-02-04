import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo/Logo'

import styles from './Header.scss'

const Header = ({className}) => (
  <div className={`${className || ''} ${styles.wrapper}`}>
    <Logo className={styles.logo} />
    <h1>GRABBER</h1>
  </div>
)

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Header
