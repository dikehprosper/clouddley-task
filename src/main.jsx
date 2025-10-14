import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mx-auto max-w-[1510px] overflow-x-hidden">
      <App />
    </div>
  </StrictMode>
)
