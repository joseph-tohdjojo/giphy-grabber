import React from 'react'

import Logo from '../Logo/Logo'

import styles from './Header.scss'

const Header = ({className}) => (
  <div className={`${className} ${styles.wrapper}`}>
    <Logo className={styles.logo} />
    <h1>GRABBER</h1>
  </div>
)

export default Header
