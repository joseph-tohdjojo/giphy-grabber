import React from 'react'

import styles from './NoAPIKey.scss'

const NoAPIKey = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.h1}>
      You forgot to set the Giphy API KEY. Grab your API KEY from <a href="https://developers.giphy.com/docs/">Giphy.</a>
    </h1>
    <p className={styles.p}>Kill node and run:</p>
    <code className={styles.code}>
      $ API_KEY=<span style={{color: '#ac4142'}}>{`<YOUR GIPHY API KEY HERE>`}</span> npm start
    </code>
  </div>
)

export default NoAPIKey
