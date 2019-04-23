import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/DesignComponents/GlobalStyle'
import theme from './components/DesignComponents/theme'

// import './bootstap/dist/css/bootstrap.min.css'

import { logger } from './utils/logger'
import reducer from './reducers'

import App from './App'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </Provider>
  </ThemeProvider>, 
 document.getElementById('root'))
