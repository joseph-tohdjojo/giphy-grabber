import React from 'react'

import styles from './NoGiphys.scss'

// components
import SorrySVG from '../SorrySVG/SorrySVG'

const NoGiphys = () => (
  <div className={styles.wrapper}>
    <h1>
      <span>
        <SorrySVG className={styles.sorry} />
        Sorry,
      </span><br/>
      We couldn't find any Giphys for that search
    </h1>
  </div>
)

export default NoGiphys
