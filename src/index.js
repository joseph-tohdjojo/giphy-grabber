// vendor dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// components
// import App from './components/App/App'

// other dependencies
import './index.scss'

if (process.env.API_KEY.length === 0) {
  // alert(`YOU FORGOT TO SET YOUR API KEY`)
  console.log(`
██████╗  ██████╗ ██╗  ██╗██╗
██╔══██╗██╔═══██╗██║  ██║██║
██║  ██║██║   ██║███████║██║
██║  ██║██║   ██║██╔══██║╚═╝
██████╔╝╚██████╔╝██║  ██║██╗
╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝

* You forgot to set your API Key *
`)
  import('./components/NoAPIKey/NoAPIKey').then(mod => {
    const NoAPIKey = mod.default
    ReactDOM.render(<NoAPIKey />, document.getElementById('root'))
  })
} else {
  console.log(`
Made by:
███╗   ███╗██████╗    ██╗  ██╗ █████╗ ███╗   ███╗██████╗ ██╗   ██╗██████╗  ██████╗ ███████╗██████╗
████╗ ████║██╔══██╗   ██║  ██║██╔══██╗████╗ ████║██╔══██╗██║   ██║██╔══██╗██╔════╝ ██╔════╝██╔══██╗
██╔████╔██║██████╔╝   ███████║███████║██╔████╔██║██████╔╝██║   ██║██████╔╝██║  ███╗█████╗  ██████╔╝
██║╚██╔╝██║██╔══██╗   ██╔══██║██╔══██║██║╚██╔╝██║██╔══██╗██║   ██║██╔══██╗██║   ██║██╔══╝  ██╔══██╗
██║ ╚═╝ ██║██║  ██║██╗██║  ██║██║  ██║██║ ╚═╝ ██║██████╔╝╚██████╔╝██║  ██║╚██████╔╝███████╗██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
`)
  import('./components/App/App').then(mod => {
    const App = mod.default
    ReactDOM.render(<App />, document.getElementById('root'))
  })
}
