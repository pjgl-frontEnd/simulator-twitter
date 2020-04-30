import React from 'react'
import ReactDom from 'react-dom'
import { Reset } from 'styled-reset'

import App from './application/app'


ReactDom.render(
  <React.Fragment>
    <Reset />
    <App />
  </React.Fragment>, document.querySelector('#root'));
