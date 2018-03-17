import React from 'react'
import { Provider } from 'react-redux'

import store from '../redux/store'
import styles from './App.scss'

// components
import GiphyContainer from '../GiphyContainer/GiphyContainer'
import Header from '../Header/Header'
import Search from '../Search/Search'

const App = () => (
  <Provider store={store}>
    <div className={styles.wrapper}>
      <Header />
      <Search />
      <GiphyContainer />
    </div>
  </Provider>
)

export default App
