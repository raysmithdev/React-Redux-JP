import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './configureStore'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
