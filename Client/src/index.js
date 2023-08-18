import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from "react-router-dom"
import {  Provider } from "react-redux"
import {createRoot} from "react-dom/client"

import './index.css'
import App from './App'
import store from "./redux/store"

createRoot(document.getElementById('root'))
.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  )
