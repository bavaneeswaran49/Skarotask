import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
