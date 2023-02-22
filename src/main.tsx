import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// FONT AWSOME
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
