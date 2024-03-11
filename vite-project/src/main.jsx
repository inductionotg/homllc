import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConversionProvider } from './components/mobile-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConversionProvider>
      <App />
    </ConversionProvider>
  </React.StrictMode>,
)
